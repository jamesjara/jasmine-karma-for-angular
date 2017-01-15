(function(){
	'use strict';
	
	var myApp = angular.module('pets',[ 'ui.router' ]);
	myApp.config(function($urlRouterProvider){
		$urlRouterProvider.otherwise("/");
	});
})();