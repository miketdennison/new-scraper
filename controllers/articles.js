// DEPENDENCIES
const scrape = require('../scripts/scrape');
const makeDate = require('../scripts/date');
const Article = require('../models/Article');

module.exports = {
  fetch: (cb) => {
    scrape((date) => {
      const articles = data;
      for (let i = 0; i < articles.length; i++) {
        articles[i].date = makeDate();
        articles[i].saved = false;
      }
      Article.collection.insertMany(articles, {
        ordered: false,
      }, (err, docs) => {
        cb(err, docs);
      });
    });
  },
  delete: (query, cb) => {
    Article.remove(query, cb);
  },
  get: (query, cb) => {
    Article.find(query).sort({
      _id: -1,
    }).exec((err, doc) => cb(doc));
  },
  update: (query, cb) => {
    Article.update({
      _id: query._id,
    }, {
      $set: query,
    }, {}, cb);
  },
};
