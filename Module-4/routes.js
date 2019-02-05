(function() {
	'use strict';

	angular.module('MenuApp')
	.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');		

		$stateProvider.state('home',{
			url: '/',
			template: '<h3>Welcome to our Restaurant!<br><br> Click on Categories above to see what we have for you today</h3>',
			templateUrl: 'views/home.html'
		})
		.state('categories',{
			url: '/categories',
			templateUrl: 'views/categories.html',
			controller: 'CategoryListController',// as $ctrl
			resolve: {
				menuCategories: ['menuDataService', function(menuDataService) {
					return menuDataService.getAllCategories();
				}]
			}
		})
		.state('itemLists',{
			url: '/categories/itemLists/{categoryShortName}',
			templateUrl: 'views/itemsList.html',
			controller: 'CategoryListController',
			resolve: {
				menuItemlist: ['$stateParams', 'menuDataService', function($stateParams, menuDataService) {
					return menuDataService.getItemsForCategory()
					.then(function(category) {
						return category[$stateParams.categoryShortName];
					});
				}]
			}
		});
	}
})();