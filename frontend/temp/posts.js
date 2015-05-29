angular.module('app').controller('PostCtlr', function($scope, $http){
  $http.get('/api/post/myPosts').then(function(posts){
    console.info(posts);
    $scope.posts = posts.data;
  });
});
