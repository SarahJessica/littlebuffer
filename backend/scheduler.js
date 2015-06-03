var sails = require('sails');
var Twit = require('twit');
var async = require('async');

sails.load(function(){
  setInterval(function(){
    checkPosts();
  }, 60000);
  checkPosts();
});

function checkPosts(){
  Post.find().where({
    datetime: {'<': new Date()}
    }).populate('owner').exec(function (err, posts){
    console.log(posts);
    // posts.forEach(function(post){
      async.series([
        function(asyncCallback){
          async.each(posts, function(post, cb){
            sendTweet(post.message, function(){
              // destroyPostedPost(post);
              cb();
            });
          }, asyncCallback);
        },
        function(asyncCallback){
          async.each(posts, function(post, cb){
            destroyPostedPost(post, function(){
              cb();
            });
            // cb();
          }, asyncCallback);
        }
      ], function(){
        console.log('all done');
      });
      // sendTweet(post.owner.twitterToken, post.owner.twitterSecret, post.message, function);
    // });
  });
}
// .populate is a waterline function that will/should bring in the twitter user data
// will need to pass in (token, secret, message, cb) when sign in is working
function sendTweet(message, cb){
  var T = new Twit({
    consumer_key: config.TWITTER_KEY,
    consumer_secret: config.TWITTER_SECRET,
    access_token: '20260726-0jKIfAGvMVmrnByh0zs3OulKIgPerRP1mDj6BYtm2',
    access_token_secret: 'fyxvXNWPExW3pIqjxPh0oxlj2qPSoGJ95LH1MBPUvF4Fy'
  });

  T.post('statuses/update', {
      status: message
    }, function (err, data, response) {
    console.log('successful', err);
    // res.status(200).end();
    cb();
  });

}
function destroyPostedPost(post, destroyCB){
  Post.destroy({id:post.id}).exec(function deleteCB(err){
    console.log('A sweet tweet delete');
    destroyCB();
  });
}
