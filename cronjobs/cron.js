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

//  module.exports = new CronJob('* * * * * *', () => {
//   var berserker = {
//     "max_points": 58,
//     "10200001": {
//         "title": "Raging Slash",
//         "level": "12",
//         "job": "Berserker",
//         "min": 1,
//         "max": 10,
//         "locked": false,
//         "unlockAt": false
//     },
//     "10200011": {
//         "title": "Death Spin",
//         "level": "12",
//         "job": "Berserker",
//         "min": 1,
//         "max": 10,
//         "locked": false,
//         "unlockAt": false
//     },
//     "10200021": {
//         "title": "Ground Breaker",
//         "level": "19",
//         "job": "Berserker",
//         "min": 0,
//         "max": 10,
//         "locked": true,
//         "unlockAt": {
//             "10200001": 4,
//             "10200011": 3
//         }
//     },
//     "10200031": {
//         "title": "Dark Aura",
//         "level": "1",
//         "job": "Berserker",
//         "min": 1,
//         "max": 1,
//         "locked": false,
//         "unlockAt": false
//     },
//     "10200041": {
//         "title": "Void Slash",
//         "level": "10",
//         "job": "Berserker",
//         "min": 0,
//         "max": 1,
//         "locked": false,
//         "unlockAt": false
//     },
//     "10200051": {
//         "title": "Bloodlust",
//         "level": "13",
//         "job": "Berserker",
//         "min": 0,
//         "max": 10,
//         "locked": true,
//         "unlockAt": {
//             "10200001": 2
//         }
//     },
//     "10200061": {
//         "title": "Intimidation",
//         "level": "28",
//         "job": "Berserker",
//         "min": 0,
//         "max": 10,
//         "locked": true,
//         "unlockAt": {
//             "10200001": 3,
//             "10200121": 4
//         }
//     },
//     "10200071": {
//         "title": "Dark Breaker",
//         "level": "22",
//         "job": "Berserker",
//         "min": 0,
//         "max": 10,
//         "locked": true,
//         "unlockAt": {
//             "10200001": 4,
//             "10200041": 3
//         }
//     },
//     "10200081": {
//         "title": "Adrenaline Rush",
//         "level": "25",
//         "job": "Berserker",
//         "min": 0,
//         "max": 10,
//         "locked": true,
//         "unlockAt": {
//             "10200001": 2,
//             "10200051": 4
//         }
//     },
//     "10200091": {
//         "title": "X Slash",
//         "level": "1",
//         "job": "Berserker",
//         "min": 1,
//         "max": 1,
//         "locked": false,
//         "unlockAt": false
//     },
//     "10200101": {
//         "title": "Inhuman Endurance",
//         "level": "43",
//         "job": "Berserker",
//         "min": 0,
//         "max": 10,
//         "locked": true,
//         "unlockAt": {
//             "10200001": 2,
//             "10200051": 6,
//             "10200081": 3,
//             "10200141": 1
//         }
//     },
//     "10200111": {
//         "title": "Deep Wounds",
//         "level": "37",
//         "job": "Berserker",
//         "min": 0,
//         "max": 10,
//         "locked": true,
//         "unlockAt": {
//             "10200001": 3,
//             "10200121": 6,
//             "10200061": 4
//         }
//     },
//     "10200121": {
//         "title": "Greatsword Mastery",
//         "level": "16",
//         "job": "Berserker",
//         "min": 0,
//         "max": 10,
//         "locked": true,
//         "unlockAt": {
//             "10200001": 4,
//             "10200011": 3
//         }
//     },
//     "10200131": {
//         "title": "Dark Might",
//         "level": "40",
//         "job": "Berserker",
//         "min": 0,
//         "max": 10,
//         "locked": true,
//         "unlockAt": {
//             "10200001": 6,
//             "10200011": 3,
//             "10200121": 6
//         }
//     },
//     "10200141": {
//         "title": "Blood Price",
//         "level": "31",
//         "job": "Berserker",
//         "min": 0,
//         "max": 10,
//         "locked": true,
//         "unlockAt": {
//             "10200001": 2,
//             "10200051": 6,
//             "10200081": 2
//         }
//     },
//     "10200151": {
//         "title": "Warrior's Instinct",
//         "level": "34",
//         "job": "Berserker",
//         "min": "",
//         "max": "",
//         "locked": "",
//         "unlockAt": {
//             "10200001": 4,
//             "10200041": 6,
//             "10200071": 5
//         }
//     },
//     "10200161": {
//         "title": "Earthquake",
//         "level": "46",
//         "job": "Berserker",
//         "min": "",
//         "max": "",
//         "locked": "",
//         "unlockAt": {
//             "10200001": 3,
//             "10200121": 6,
//             "10200061": 4,
//             "10200111": 2
//         }
//     }
// }
//    dinsert = {};
//    dinsert.class_name = "berserker"
//    dinsert.data_object = berserker
//    constants.Build_template.create(dinsert, (err) => {
//      if (err) return console.log('Error trying remove model at cronjob 1');
//      console.log("Inserted")
//    });
//  }, null, true, 'America/Los_Angeles');