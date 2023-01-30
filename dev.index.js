require("dotenv").config();

const rwClient = require("./functions/tweets.js");

const afunction = async () => {
	try {
		await rwClient.v1.tweet("Good Morning Friends!");
		console.log("tweet successfully created");
	} catch (e) {
		console.error(e);
	}
	//console.log(tweet);

	//const picked_tweet = Math.floor(Math.random() * fns.canned_tweets.length);
	// fns.client.v2
	// 	.tweet("This tweet was written by a bot")
	// 	.then((val) => {
	// 		console.log(val);
	// 		console.log("success");
	// 	})
	// 	.catch((err) => {
	// 		console.log(err);
	// 	});
	//console.log(fns.canned_tweets[picked_tweet]);
};

afunction();
