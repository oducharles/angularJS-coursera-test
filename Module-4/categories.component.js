(function() {
	'use strict';

	angular.module('data')
	.component('categoriesList', function() {
		templateUrl: 'categoryList.html'//,
		bindings: {
			items: '<'
		}
	});


})();