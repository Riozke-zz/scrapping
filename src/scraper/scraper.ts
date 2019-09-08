import { CronJob } from "cron";
import cheerio from "cheerio";
import puppeteer from "puppeteer";

const url = "https://twitter.com/carlsjrhn";

export const job = new CronJob("0 */2 * * * *", function() { //every one minute
  puppeteer
    .launch()
    .then(browser => browser.newPage())
    .then(page => {
      return page.goto(url).then(function() {
        return page.content();
      });
    })
    .then(html => {
      const $ = cheerio.load(html);
      // const elements = [];
      // $(".tweet>.content>.js-tweet-text-container>.tweet-text").length;
    })
    .catch(console.error);
});
