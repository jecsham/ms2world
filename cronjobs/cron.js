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

//   module.exports = new CronJob('* * * * * *', () => {
//   var priest = {
//     "10400001": {
//         "title": "Celestial Light",
//         "level": "10",
//         "job": "Priest",
//         "min": 1,
//         "max": 10,
//         "locked": false,
//         "unlockAt": false
//     },
//     "10400011": {
//         "title": "Holy Blast",
//         "level": "10",
//         "job": "Priest",
//         "min": 1,
//         "max": 10,
//         "locked": false,
//         "unlockAt": false
//     },
//     "10400021": {
//         "title": "Scepter Mastery",
//         "level": "13",
//         "job": "Priest",
//         "min": 0,
//         "max": 10,
//         "locked": false,
//         "unlockAt": false
//     },
//     "10400031": {
//         "title": "Holy Relic",
//         "level": "28",
//         "job": "Priest",
//         "min": 0,
//         "max": 10,
//         "locked": true,
//         "unlockAt": {
//             "10400001": 3,
//             "10400011": 3,
//             "10400041": 3
//         }
//     },
//     "10400041": {
//         "title": "Shield of the Archon",
//         "level": "19",
//         "job": "Priest",
//         "min": 0,
//         "max": 10,
//         "locked": true,
//         "unlockAt": {
//             "10400001": 3,
//             "10400011": 3
//         }
//     },
//     "10400051": {
//         "title": "Holy Symbol",
//         "level": "34",
//         "job": "Priest",
//         "min": 0,
//         "max": 10,
//         "locked": true,
//         "unlockAt": {
//             "10400081": 6,
//             "10400091": 3
//         }
//     },
//     "10400061": {
//         "title": "Sanctuary",
//         "level": "31",
//         "job": "Priest",
//         "min": 0,
//         "max": 10,
//         "locked": true,
//         "unlockAt": {
//             "10400071": 3,
//             "10400101": 3
//         }
//     },
//     "10400071": {
//         "title": "Healing Prayer",
//         "level": "10",
//         "job": "Priest",
//         "min": 0,
//         "max": 10,
//         "locked": false,
//         "unlockAt": false
//     },
//     "10400081": {
//         "title": "Celestial Guardian",
//         "level": "16",
//         "job": "Priest",
//         "min": 0,
//         "max": 10,
//         "locked": false,
//         "unlockAt": false
//     },
//     "10400091": {
//         "title": "Celestial Blessings",
//         "level": "25",
//         "job": "Priest",
//         "min": 0,
//         "max": 10,
//         "locked": true,
//         "unlockAt": {
//             "10400081": 3
//         }
//     },
//     "10400101": {
//         "title": "Scourging Wave",
//         "level": "22",
//         "job": "Priest",
//         "min": 0,
//         "max": 10,
//         "locked": true,
//         "unlockAt": {
//             "10400071": 2
//         }
//     },
//     "10400111": {
//         "title": "Steadfast Faith",
//         "level": "1",
//         "job": "Priest",
//         "min": 1,
//         "max": 1,
//         "locked": false,
//         "unlockAt": false
//     },
//     "10400121": {
//         "title": "Smiting Aura",
//         "level": "40",
//         "job": "Priest",
//         "min": 0,
//         "max": 10,
//         "locked": true,
//         "unlockAt": {
//             "10400001": 4,
//             "10400071": 3,
//             "10400101": 3,
//             "10400061": 3
//         }
//     },
//     "10400131": {
//         "title": "Disciple",
//         "level": "43",
//         "job": "Priest",
//         "min": 0,
//         "max": 10,
//         "locked": true,
//         "unlockAt": {
//             "10400081": 6,
//             "10400091": 6,
//             "10400051": 4
//         }
//     },
//     "10400141": {
//         "title": "Healing Mastery",
//         "level": "37",
//         "job": "Priest",
//         "min": 0,
//         "max": 10,
//         "locked": true,
//         "unlockAt": {
//             "10400021": 4
//         }
//     },
//     "10400151": {
//         "title": "Heavenly Wings",
//         "level": "1",
//         "job": "Priest",
//         "min": 1,
//         "max": 1,
//         "locked": false,
//         "unlockAt": false
//     },
//     "10400161": {
//         "title": "Angelic Ray",
//         "level": "46",
//         "job": "Priest",
//         "min": 0,
//         "max": 5,
//         "locked": true,
//         "unlockAt": {
//             "10400021": 4
//         }
//     }
// }
//      dinsert = {};
//      dinsert.class_name = "priest"
//      dinsert.data_object = priest
//      constants.Build_template.create(dinsert, (err) => {
//        if (err) return console.log('Error trying remove model at cronjob 1');
//        console.log("Inserted")
//      });
//    }, null, true, 'America/Los_Angeles');