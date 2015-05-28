/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var Twit = require('twit');


module.exports = {
 	tweet: function (req, res) {

		console.log('message', req.body.message);
		// var message = (req.userId, function (err, user){

			var message = req.body.message;
      var datetime = req.body.datetime;

      Post.create({
        message: message,
        datetime: datetime
      }).exec(function(err, post){
        console.log('working', post, err);
      });

			var T = new Twit({
				consumer_key: config.TWITTER_KEY,
				consumer_secret: config.TWITTER_SECRET,
				access_token: '20260726-0jKIfAGvMVmrnByh0zs3OulKIgPerRP1mDj6BYtm2',
				access_token_secret: 'fyxvXNWPExW3pIqjxPh0oxlj2qPSoGJ95LH1MBPUvF4Fy'
			});


			T.post('statuses/update', {
					status: message
				}, function (err, data, response) {
				console.log(data, err);
				res.status(200).end();
			});


		// });
	}
};
