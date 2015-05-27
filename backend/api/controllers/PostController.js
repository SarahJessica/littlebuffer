/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Twit = require('twit');

module.exports = {


	tweet: function(req, res){
			var T = new Twit({
			  consumer_key:         config.TWITTER_KEY,
			  consumer_secret:      config.TWITTER_SECRET,
			  access_token:         '...',
			  access_token_secret:  '...'
			});

			T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
		  	console.log(data, err);
		});
	}
};
