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
  $scope.delete = function(post){
    swal({   title: "Are you sure?",   text: "You will not be able to recover this imaginary file!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel plx!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {     swal("Deleted!", "Your imaginary file has been deleted.", "success");   } else {     swal("Cancelled", "Your imaginary file is safe :)", "error");   } });
  };
});
