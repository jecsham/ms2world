const constants = require('../routes/constants.js');
const CronJob = require('cron').CronJob;
const scrapeIt = require("scrape-it")


// get news
module.exports = new CronJob('* 1 * * *', function () {

  scrapeIt("http://maplestory2.nexon.net/en/news/all", {
    articles: {
      listItem: ".news-item",
      data: {
        date_create: {
          selector: ".publishing-info-content > time",
          convert: x => new Date(x)
        },
        title: "h2",
        tag: ".news-category-tag",
        img: {
          selector: ".news-item-image",
          attr: "style"
        },
        url: {
          selector: "a",
          attr: "href"
        }
      }
    }
  }, (err, { data }) => {
    var news = data.articles;
    news.forEach((element, index) => {
     news[index].img = element.img.match(/(http:\/\/.*\.(jpg|png))/g);
    });
    constants.Ms2_new.deleteMany({}, (err) => {
      if (err) return console.log('Error trying remove model at cronjob 1');
      constants.Ms2_new.create(news, (err) => {
        if (err) return console.log('Error trying add news at cronjob 1');
        return console.log('Cronjob 1 completed')
      });
    });

  });
}, null, true, 'America/Los_Angeles');


// get classes
module.exports = new CronJob('* 1 * * *', function () {

  scrapeIt("http://maplestory2.nexon.net/en/game/classes", {
    classes: {
      listItem: ".class-item",
      data: {
        name: "h2",
        img: {
          selector: ".class-image img",
          attr: "src"
        }
      }
    }
  }, (err, { data }) => {
    var classes = data.classes;
     constants.Ms2_class.deleteMany({}, (err) => {
       if (err) return console.log('Error trying remove model at cronjob 2');
       constants.Ms2_class.create(classes, (err) => {
         if (err) return console.log('Error trying add classes at cronjob 2');
         return console.log('Cronjob 2 completed')
       });
     });

  });
}, null, true, 'America/Los_Angeles');