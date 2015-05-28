angular.module('app').controller('loginCtlr', function($scope, $auth){
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

});
