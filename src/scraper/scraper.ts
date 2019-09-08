import { CronJob } from "cron";
import cheerio from "cheerio";
import puppeteer from "puppeteer";
import PromotionService from '@services/Promotion';

const url = "https://twitter.com/carlsjrhn";



export const job = new CronJob("0 */1 * * * *", function() {
  PromotionService.all()
  .then(promotions => {
    console.log(promotions);
  });

  //every two minutes
  puppeteer
    .launch()
    .then(browser => browser.newPage())
    .then(page => {
      return page.goto(url).then(function() {
        return page.content();
      });
    })
    .then(html => {
      const $: CheerioStatic = cheerio.load(html);
      // const elements = [];
      console.log(
        `Found ${
          $(".tweet>.content>.js-tweet-text-container>.tweet-text").length
        } tweets at the moment!`
      );
    })
    .catch(console.error);
});
