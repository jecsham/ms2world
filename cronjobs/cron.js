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
//   var wizard = {
//     "max_points": 58,
//     "10300001": {
//         "title": "Phantom Claw",
//         "level": "10",
//         "job": "Wizard",
//         "min": 1,
//         "max": 10,
//         "locked": false,
//         "unlockAt": false
//     },
//     "10300011": {
//         "title": "Flame Tornado",
//         "level": "22",
//         "job": "Wizard",
//         "min": 0,
//         "max": 10,
//         "locked": true,
//         "unlockAt": {
//             "10300021": 4
//         }
//     },
//     "10300021": {
//         "title": "Flame Wave",
//         "level": "10",
//         "job": "Wizard",
//         "min": 0,
//         "max": 10,
//         "locked": false,
//         "unlockAt": false
//     },
//     "10300031": {
//         "title": "Chain Lightning",
//         "level": "16",
//         "job": "Wizard",
//         "min": 0,
//         "max": 10,
//         "locked": false,
//         "unlockAt": false
//     },
//     "10300041": {
//         "title": "Arcane Blast",
//         "level": "10",
//         "job": "Wizard",
//         "min": 1,
//         "max": 10,
//         "locked": false,
//         "unlockAt": false
//     },
//     "10300051": {
//         "title": "Ice Spear",
//         "level": "13",
//         "job": "Wizard",
//         "min": 0,
//         "max": 10,
//         "locked": false,
//         "unlockAt": false
//     },
//     "10300061": {
//         "title": "Mana Font",
//         "level": "1",
//         "job": "Wizard",
//         "min": 1,
//         "max": 1,
//         "locked": false,
//         "unlockAt": false
//     },
//     "10300071": {
//         "title": "Thunderbolt",
//         "level": "28",
//         "job": "Wizard",
//         "min": 0,
//         "max": 10,
//         "locked": true,
//         "unlockAt": {
//             "10300031": 4
//         }
//     },
//     "10300081": {
//         "title": "Teleport",
//         "level": "1",
//         "job": "Wizard",
//         "min": 1,
//         "max": 1,
//         "locked": false,
//         "unlockAt": false
//     },
//     "10300091": {
//         "title": "Focus Seal",
//         "level": "31",
//         "job": "Wizard",
//         "min": 0,
//         "max": 10,
//         "locked": true,
//         "unlockAt": {
//             "10300131": 4
//         }
//     },
//     "10300101": {
//         "title": "Pyromancy",
//         "level": "34",
//         "job": "Wizard",
//         "min": 0,
//         "max": 10,
//         "locked": true,
//         "unlockAt": {
//             "10300011": 5,
//             "10300021": 5
//         }
//     },
//     "10300111": {
//         "title": "Cryomancy",
//         "level": "37",
//         "job": "Wizard",
//         "min": "",
//         "max": "",
//         "locked": "",
//         "unlockAt": {
//             "10300051": 5,
//             "10300141": 5
//         }
//     },
//     "10300121": {
//         "title": "Electromancy",
//         "level": "40",
//         "job": "Wizard",
//         "min": "",
//         "max": "",
//         "locked": "",
//         "unlockAt": {
//             "10300031": 5,
//             "10300071": 5
//         }
//     },
//     "10300131": {
//         "title": "Magic Armor",
//         "level": "19",
//         "job": "Wizard",
//         "min": 0,
//         "max": 10,
//         "locked": false,
//         "unlockAt": false
//     },
//     "10300141": {
//         "title": "Ice Storm",
//         "level": "25",
//         "job": "Wizard",
//         "min": 0,
//         "max": 10,
//         "locked": true,
//         "unlockAt": {
//             "10300051": 4
//         }
//     },
//     "10300151": {
//         "title": "Elemental Master",
//         "level": "43",
//         "job": "Wizard",
//         "min": 0,
//         "max": 10,
//         "locked": false,
//         "unlockAt": false
//     },
//     "10300161": {
//         "title": "Mana Claw",
//         "level": "46",
//         "job": "Wizard",
//         "min": 0,
//         "max": 10,
//         "locked": true,
//         "unlockAt": {
//             "10300041": 3
//         }
//     }
// }
//     dinsert = {};
//     dinsert.class_name = "wizard"
//     dinsert.data_object = wizard
//     constants.Build_template.create(dinsert, (err) => {
//       if (err) return console.log('Error trying remove model at cronjob 1');
//       console.log("Inserted")
//     });
//   }, null, true, 'America/Los_Angeles');