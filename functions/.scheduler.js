var cron = require("node-cron");
var {isopod_tweet} = require("./tweet");

cron.schedule("06 14 * * 0", () => {
	isopod_tweet();
});
