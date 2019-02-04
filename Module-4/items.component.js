(function() {
	'use strict';

	angular.module('data')
	.component('Items', items);

	function items() {
		templateUrl: 'itemsList.html'//,
		// bindings: {
		// 	items: '<'
		// }
	}
})();