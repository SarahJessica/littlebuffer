angular.module('app').controller('login', function($scope, $auth, $http){
  // console.log('controller loaded;');

  $scope.isAuthenticated = $auth.isAuthenticated;

  $scope.login = function(){
    $auth.authenticate('twitter');
  };

  // $scope.authenticate = function(pin){
  //   // $http(https://twitter.com/oauth/access_token?oauth_verifier='+ pin +'&'+ requestParams);
  //   // I know the above won't work... I was thinking of it as a template? Not sure
  // };

  $scope.logout = function(){
    $auth.logout();
  };

  $scope.tweet = function(){
    $http.post('/api/post/tweet', {message: $scope.message})
    .then(function(){

    });
  };

  $scope.minDate = new Date();
  $scope.opened = false;
  $scope.open = function($event){
    // this ui-bootstrap plugin would otherwise auto set to false!
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = !$scope.opened;
  };

});
