const constants = require('../constants/constants.js');
const CronJob = require('cron').CronJob;
const scrapeIt = require("scrape-it")

// get news
module.exports = new CronJob('0 * * * *', () => {

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
    var news = constants.sanitize(data.articles);
    news.forEach((element, index) => {
      news[index].img = element.img.match(/(http:\/\/.*\.(jpg|png))/g);
      news[index].img = news[index].img[0].replace('http', 'https')
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
//  module.exports = new CronJob('* * * * * *', function () {

//    scrapeIt("https://ms2codex.com/us/skillbuilder/", {
//      classes: {
//        listItem: ".class_cell",
//        data: {
//          name: {
//            selector: ".class_icon",
//            attr: "oldtitle"
//          },
//          img: {
//            selector: ".class_icon",
//            attr: "src"
//          }
//        }
//      }
//    }, (err, { data }) => {
//      var classes = data.classes;
//       constants.Ms2_class.deleteMany({}, (err) => {
//         if (err) return console.log('Error trying remove model at cronjob 2');
//         constants.Ms2_class.create(classes, (err) => {
//           if (err) return console.log('Error trying add classes at cronjob 2');
//           return console.log('Cronjob 2 completed')
//         });
//       });
//    });
//  }, null, true, 'America/Los_Angeles');

//  module.exports = new CronJob('* * * * * *', () => {
//    dinsert = [
//      {name: "PvX"},
//      {name: "PvE"},
//      {name: "PvP"},
//      {name: "Other"}
//    ];
//    constants.Ms2_classType.insertMany(dinsert, (err) => {
//      if (err) return console.log('Error trying remove model at cronjob 1');
//      console.log("Inserted")
//    });
//  }, null, true, 'America/Los_Angeles');


  // constants.Build_template.deleteMany({ class_name: 'hgunner' }, function (err) {
  //   if (err) return handleError(err);
  //   console.log("all deleted")
  // });

