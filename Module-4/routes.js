(function() {
	'use strict';

	angular.module('MenuApp')
	.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider) {

		// Redirect to / if no URL matches
		$urlRouterProvider.otherwise('/');		

		// Set up UI states
		$stateProvider.state('home',{
			url: '/',
			// template: '<div>This is TAB 1 content</div>'
			templateUrl: 'home.html'
		})
		.state('categories',{
			url: '/categories',
			templateUrl: 'categories.html'//,
			// controller: 'CategoriesController as category'
		});
	}
})();