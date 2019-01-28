(function() {
	'use strict';

	var shoppingList1 = [
		"Black Books","Bic Pens","Towel","Soap","Tooth paste","Sugar",
	];

	var shoppingList2 = [
		{
			name: "Hard Brush",
			fine: "7000"
		},
		{
			name: "Vim/Apic",
			fine: "10000"
		},
		{
			name: "Mopping rug",
			fine: "3000"
		},
		{
			name: "Toilet tissues",
			fine: "5000"
		},
	];
	angular.module('shoppingListApp', [])
	.controller('shoppingListController', shoppingListController);

	shoppingListController.$inject = ['$scope'];
	function shoppingListController($scope) {
		$scope.shoppingList1 = shoppingList1;
		$scope.shoppingList2 = shoppingList2;
	}

})();