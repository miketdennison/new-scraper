const request = require("request");
const cheerio = require("cheerio");


var scrape = (cb) => {
    request("https://www.nytimes.com/", (err, res, body) => {
        var $ = cheerio.load(body);
        var articles = [];
        $("article").each((i, element) => {
            var head = $(element).find('h2').text().trim();
            var sum = $(element).find('p').text().trim()

            if(head && sum) {
                var headNeat = head.replace(/(r\n|\n|\r|\t|\s+)/gm, " ").trim();
                var sumNeat = sum.replace(/(r\n|\n|\r|\t|\s+)/gm, " ").trim();

                var dataToAdd = {
                    headline: headNeat,
                    summary: sumNeat
                };

                articles.push(dataToAdd);
            }
        });
        cb(articles);
    });
}

module.exports = scrape;