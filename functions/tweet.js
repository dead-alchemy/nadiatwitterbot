require("dotenv").config();

const {twitterClient} = require("../client");
const {canned_tweets} = require("../consts");

module.exports.isopod_tweet = async () => {
	try {
		const picked_tweet = Math.floor(Math.random() * canned_tweets.length);
		await twitterClient.v2.tweet(canned_tweets[picked_tweet]);
		console.log("tweeted: " + canned_tweets[picked_tweet]);
	} catch (e) {
		console.log(e);
	}
};
