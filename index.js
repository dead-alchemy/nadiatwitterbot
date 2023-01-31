require("dotenv").config();

var cron = require("node-cron");

cron.schedule("39 17 * * 0", () => {
	console.log("running a task every minute");
});
