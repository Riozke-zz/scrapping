"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var cron_1 = require("cron");
var cheerio_1 = __importDefault(require("cheerio"));
var puppeteer_1 = __importDefault(require("puppeteer"));
var url = "https://twitter.com/carlsjrhn";
exports.job = new cron_1.CronJob("0 */2 * * * *", function () {
    //every two minutes
    puppeteer_1["default"]
        .launch()
        .then(function (browser) { return browser.newPage(); })
        .then(function (page) {
        return page.goto(url).then(function () {
            return page.content();
        });
    })
        .then(function (html) {
        var $ = cheerio_1["default"].load(html);
        // const elements = [];
        console.log("Found " + $(".tweet>.content>.js-tweet-text-container>.tweet-text").length + " tweets at the moment!");
    })["catch"](console.error);
});
