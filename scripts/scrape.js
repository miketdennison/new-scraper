// DEPENDENCIES
const request = require('request');
const cheerio = require('cheerio');

const scrape = (cb) => {
  request('https://www.nytimes.com/', (err, res, body) => {
    const $ = cherio.load(body);
    const articles = [];

    $('.theme-summary').each( (i, element) => {
      const article = $(this).children('.story-heading').text().trim();
      const summary = $(this).children('.summary').text().trim();

      // If text, cleanup whitespace then add it to articles array
      if (article && summary) {
        const articleNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, ' ').trim();
        const summaryNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, ' ').trim();

        const dataToAdd = {
          article: articleNeat,
          summary: summaryNeat,
        };
        articles.push(dataToAdd);
      }
    });
    cb(articles);
  });
};

module.exports = scrape;
