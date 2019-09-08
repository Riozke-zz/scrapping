const cheerio = require("cheerio");
const puppeteer = require("puppeteer");
const cron = require('node-cron');

const url = "https://twitter.com/carlsjrhn";

var task = cron.schedule('* * * * *', () => {
    puppeteer
    .launch()
    .then(browser => browser.newPage())
    .then(page => {
        return page.goto(url).then(function() {
            return page.content();
        });
    })
    .then (html => {
        const $ = cheerio.load(html);
        const elements = [];
        $('.tweet>.content>.js-tweet-text-container>.tweet-text').each(function(){
            console.log('\n----------TWEET START--------------');
            console.log($(this).text());
            console.log('------------TWEET END--------------\n');
            
        });

    })
    .catch(console.error)

});
   

