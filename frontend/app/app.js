angular.module('app', ['satellizer', 'ui.bootstrap'])
.config(function($authProvider){

  $authProvider
  .twitter({url: '/api/user/login'});

  // $stateProvider
  // .state('new', {url: '/', templateUrl: '/index.html', controller: 'ScheduleCtrl'})
  // .state('posts', {url: '/', templateUrl: '/myPosts.html', controller: 'PostCtrl'});
});
