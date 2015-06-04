angular.module('app').controller('PostCtlr', function($scope, $http, $rootScope, $window, api){

  $http.get(api +'post/myPosts').then(function(posts){
    console.info(posts);
    $rootScope.posts = posts.data;
  });
  // $scope.post.edit = false;
  $scope.makeUpdate = function(post){
    post.edit = true;
    post.datetime = new Date(post.datetime);
    console.log(post);
    console.log(typeof post.datetime);
  };
  $scope.saveUpdate = function(post){
    post.edit = false;
    $http.post(api + 'post/update', post)
    .then(function(res){
      // console.log('RES', res);

    });
  };

  $scope.delete = function(post){
    swal({
      title: "Are you sure?",
      text: "You won't get it back!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel plz!",
      closeOnConfirm: false,
      closeOnCancel: false },
      function(isConfirm){
        if (isConfirm) {
          destroy(post);
        } else {
        swal("Cancelled", "Your tweet is sweet :)", "error");
        }
    });
  };

  function destroy(post){
    $http.post(api + 'post/destroy/', post)
    .then(function(res){
      console.log('RES', res);
      swal("Deleted!", "Poof!", "success");
      $window._.remove($rootScope.posts, function(p){
        return p.id === res.data.id;
      });
    });
  }
});
