angular.module('app').controller('ScheduleCtlr', function($scope, $http){

  $scope.tweet = function(){

    var datetime = new Date($scope.date.getFullYear(),
                              $scope.date.getMonth(),
                              $scope.date.getDate(),
                              $scope.time.getHours(),
                              $scope.time.getMinutes());

    $http.post('/api/post/tweet', {message: $scope.message})
    .then(function(){

    });
  };

  $scope.time = new Date();

  $scope.minDate = new Date();
  $scope.opened = false;
  $scope.open = function($event){
    // this ui-bootstrap plugin would otherwise auto set to false!
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = !$scope.opened;
  };
});