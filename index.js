require("dotenv").config();
var cron = require("node-cron");
var tweet = require("./functions/tweet");

cron.schedule("06 14 * * 0", () => {
	tweet.isopod_tweet();
});
