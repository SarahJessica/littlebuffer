angular.module('app').controller('login', function($scope){
  console.log('controller loaded;');

  $scope.login = function(){
    console.info('this works');
  };
});
