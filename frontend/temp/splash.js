angular.module('app').controller('splashCtlr', function ($scope, $modal) {

  $scope.open = function() {
    var modalInstance = $modal.open({
      templateUrl: 'modalInfo.html',
        controller: 'ModalInstanceCtrl',
        resolve: {
          splash: function () {
            return $scope.splash;
          }
        }
    });
  };
});

//   $scope.open = function () {
//     console.info('clicked');
//
//     // var modalInstance = $modal.open({
//     //   animation: $scope.animationsEnabled,
//     //   templateUrl: 'myModalContent.html',
//     //   controller: 'ModalInstanceCtrl',
//     //   resolve: {
//     //     splash: function () {
//     //       return $scope.splash;
//     //     }
//     //   }
//     });
//
//     modalInstance.result.then(function (selectedItem) {
//       $scope.selected = selectedItem;
//     }, function () {
//       console.info('Modal dismissed at: ' + new Date());
//     });
//   };
//
//   // $scope.ok = function () {
//   //   $modalInstance.close($scope.selected.item);
//   // };
//   //
//   // $scope.cancel = function () {
//   //   $modalInstance.dismiss('cancel');
//   // });
// });

angular.module('app').controller('ModalInstanceCtrl', function(){


});
