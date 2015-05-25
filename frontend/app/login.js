angular.module('app').controller('login', function($scope, $auth){
  console.log('controller loaded;');

  $scope.login = function(){
    $auth.authenticate('twitter');
  };
});
