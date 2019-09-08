"use strict";
exports.__esModule = true;
var cron_1 = require("cron");
exports.job = new cron_1.CronJob("0 */1 * * * *", function () {
    var d = new Date();
    console.log("At one Minutes:", d);
});
