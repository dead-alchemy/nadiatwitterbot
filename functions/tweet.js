require("dotenv").config();
const {schedule} = require("@netlify/functions");

const {twitterClient} = require("../client");
const {canned_tweets} = require("../consts");

const isopod_tweet = async () => {
	try {
		const picked_tweet = Math.floor(Math.random() * canned_tweets.length);
		await twitterClient.v2.tweet(canned_tweets[picked_tweet]);
		console.log("tweeted: " + canned_tweets[picked_tweet]);
	} catch (e) {
		console.log(e);
	}
	return;
};

exports.handler = schedule("15 19 * * 0", isopod_tweet);
