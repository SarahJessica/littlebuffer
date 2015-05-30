/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */


module.exports = {
 	tweet: function (req, res) {

		console.log('message', req.body.message);
		// var message = (req.userId, function (err, user){

			var message = req.body.message;
      var datetime = req.body.datetime;

      Post.create({
        message: message,
        datetime: datetime,
        // isPosted: false,
        owner: 100 // req.userId
      }).exec(function(err, post){
        // console.log('**********working', post, err, req.body.datetime);
        // console.log('##################', res);
      });

		// });
	},
  myPosts : function(req, res){
    Post.find({}).exec(function(err, posts){
      // console.log("€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€", posts);
      res.json(posts);
    });
  },
  update : function(req, res){
    console.log('req.body', req.body);
    // console.log('res', res);
    Post.update({id : req.body.id}, req.body).exec(function(err, post){
      console.log(post);
      res.status(200);
    });
  }
};
