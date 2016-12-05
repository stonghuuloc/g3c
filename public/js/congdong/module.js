'user strict';

angular.module('g3cApp.congDong',['ngRoute'])
	.config(['$routeProvider', function config($routeProvider){
		$routeProvider.when('/congdong',{
			controller:'congDongCtrl',
			templateUrl:'html/congdong/congdong.html'
		})
      .when('/congdong/:username', {
      controller: 'userProfileCtrl',
      templateUrl:'html/congdong/user-profile.html'
    });
	}]);

