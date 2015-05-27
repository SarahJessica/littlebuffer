/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var Twit = require('twit');


module.exports = {
	tweet: function (req, res) {

		var T = new Twit({
			consumer_key: config.TWITTER_KEY,
			consumer_secret: config.TWITTER_SECRET,
			access_token: '20260726-0jKIfAGvMVmrnByh0zs3OulKIgPerRP1mDj6BYtm2',
			access_token_secret: 'fyxvXNWPExW3pIqjxPh0oxlj2qPSoGJ95LH1MBPUvF4Fy'
		})


		T.post('statuses/update', {
			status: 'this is a tweet from my littlebuffer app I\'m working on. See github.com/SarahJessica/littlebuffer'
		}, function (err, data, response) {
			console.log(data, err);
		})
	}
};
