require("dotenv").config();
const {schedule} = require("@netlify/functions");

const {twitterClient} = require("../client");
//const {canned_tweets} = require("../consts");

const test_tweet = async () => {
	try {
		await twitterClient.v2.tweet("Test Tweet");
		console.log("tweeted: " + "Test Tweet");
	} catch (e) {
		console.log(e);
	}
	return;
};

exports.handler = schedule("38 5 * * *", test_tweet);
