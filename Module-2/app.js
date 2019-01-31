(function() {
	'use strict';

/*	var shoppingList1 = [
		"Black Books","Bic Pens","Towel","Graph Books","Tooth paste","Art Books","Sugar",
	];*/

	var myShopingList = [
		{
			name: "Hard Brush",
			quantity: "1"
		},
		{
			name: "Bathing Soap",
			quantity: "3"
		},
		{
			name: "Mopping rugs",
			quantity: "2"
		},
		{
			name: "Toilet tissues",
			quantity: "10"
		},
		{
			name: "Black Books",
			quantity: "5"
		},
		{
			name: "Bic Pens",
			quantity: "5"
		},
		{
			name: "Tooth Paste",
			quantity: "2"
		},
	];

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', toBuyController)
	.controller('AlreadyBoughtController', alreadyBoughtController)
	.service('ShoppingListCheckOffService', shoppingListCheckOffService);

	toBuyController.$inject = ['ShoppingListCheckOffService'];
	alreadyBoughtController.$inject = ['ShoppingListCheckOffService'];


	function toBuyController(shoppingListCheckOffService) {
		var toBuy = this;
		toBuy.list = myShopingList;
		toBuy.addToBought = function(itemIndex) {
			shoppingListCheckOffService.addToBought(toBuy.list[itemIndex].name, toBuy.list[itemIndex].quantity);
			shoppingListCheckOffService.removeFromToBuy(itemIndex);
		};
	}

	function alreadyBoughtController(shoppingListCheckOffService) {
		var boughtItems = this;
		boughtItems.list = shoppingListCheckOffService.getItems();
	}

	function shoppingListCheckOffService() {
		var service = this;

		var items = myShopingList;
		var alreadybought = [];

		service.removeFromToBuy = function(itemIndex) {
			items.splice(itemIndex, 1);
		};

		service.addToBought = function(name, quantity) {
			var item = {
				name: name,
				quantity: quantity
			};
			alreadybought.push(item);
		};

		service.getItems = function() {
			return alreadybought;
		};
	}

})();