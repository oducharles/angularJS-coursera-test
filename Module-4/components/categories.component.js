(function() {
	'use strict';

	angular.module('data')
	.controller('CategoryListController', CategoryListController)
	.component('categoriesList', {
		templateUrl: 'views/categoryList.html',
		controller: CategoryListController,
		bindings: {
			items: '<'
		}
	});

	CategoryListController.$inject = ['menuDataService'];
	function CategoryListController(menuDataService, categoryShortName) {
	// CategoryListController.$inject = ['menuCategories'];
	// function CategoryListController(menuCategories) {
		var $ctrl = this;

		var promise = menuDataService.getAllCategories();
		promise.then(function(response) {
			$ctrl.items = response.data;
		})
		.catch(function(error) {
			console.log("Error");
		});

		var promise = menuDataService.getItemsForCategory(categoryShortName);
		promise.then(function(response) {

			var menuItemlist = (response.data).menu_items.categoryShortName;
			$ctrl.getItemlist = menuItemlist;
		})
		.catch(function(error) {
			console.log("Error");
		});
	}

})();