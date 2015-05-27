angular.module('app').controller('login', function($scope, $auth, $http){
  console.log('controller loaded;');

  $scope.login = function(){
    $auth.authenticate('twitter');
  };

  // $scope.authenticate = function(pin){
  //   // $http(https://twitter.com/oauth/access_token?oauth_verifier='+ pin +'&'+ requestParams);
  //   // I know the above won't work... I was thinking of it as a template? Not sure
  // };

  $scope.tweet = function(){
    $http.post('/api/post/tweet', '')
    .then(function(){

    });
  };
});
