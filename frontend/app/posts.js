angular.module('app').controller('PostCtlr', function($scope, $http){
  $http.get('/api/post/myPosts').then(function(posts){
    console.info(posts);
    $scope.posts = posts.data;
  });
  // $scope.post.edit = false;
  $scope.makeUpdate = function(post){
    post.edit = true;
    console.log(post);
  };
  $scope.saveUpdate = function(post){
    post.edit = false;
  };
  $scope.delete = function(post){};
});
