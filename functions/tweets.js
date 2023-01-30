//const client = new TwitterApi(process.env.BEARER_TOKEN);

// , {
// 	appKey: process.env.API_KEY,
// 	appSecret: process.env.API_KEY_SECRET,
// 	accessToken: process.env.API_ACCESS_TOKEN,
// 	accessSecret: process.env.API_TOKEN_SECRET,
// }
//module.exports.client = client;

module.exports.canned_tweets = [
	`Hello ${process.env.TWITTER_USERNAME} it's time to feed your isopods.`,
	`Hey ${process.env.TWITTER_USERNAME} here is your weekly reminder to feed your bugs.`,
	`I think isopods are pill bugs, regardless ${process.env.TWITTER_USERNAME} should feed them.`,
	`IDK if it's isopod, pill bug, potato bug, or rollie pollie, it's time for ${process.env.TWITTER_USERNAME} to feed them.`,
];

const {TwitterApi} = require("twitter-api-v2");

const client = new TwitterApi({
	appKey: process.env.API_KEY,
	appSecret: process.env.API_KEY_SECRET,
	accessToken: process.env.API_ACCESS_TOKEN,
	accessSecret: process.env.API_TOKEN_SECRET,
});

const rwClient = client.readWrite;

module.exports = rwClient;
