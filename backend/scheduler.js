var sails = require('sails');
var Twit = require('twit');

sails.load(function(){
  setInterval(function(){
    checkPosts();
  }, 60000);
  checkPosts();
});

function checkPosts(){
  Post.find().where({
    datetime: {'<': new Date()},
    isPosted: false}).populate('owner').exec(function (err, posts){
    console.log(posts);
    posts.forEach(function(post){
      // sendTweet(post.owner.twitterToken, post.owner.twitterSecret, post.message, function);
      sendTweet(post.message, function(){
          updatePostedPost(post);
        });
    });
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
function updatePostedPost(post){
  post.isPosted = true;
  post.save(function(){
    console.log('isPosted changed to true');
  });
}
