angular.module('app', ['satellizer', 'ui.bootstrap'])
.config(function($authProvider){

  $authProvider
  .twitter({url: '/api/user/login'
            // type: '1.0',
            // popupOptions: {
            //   width: 1020,
            //   height: 618
            // }
            });

});
