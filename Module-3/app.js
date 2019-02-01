(function() {
	'use strict';

	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', narrowItDownController)
	.service('MenuSearchService', menuSearchService);

	//controller
	narrowItDownController.$inject = ['MenuSearchService'];
	function narrowItDownController(menuSearchService) {
		var narrowDown = this;
		
		narrowDown.noResults = "";

		narrowDown.findInMenu  = function(description) {

			menuSearchService.emptySearchHistory();

			var promise = menuSearchService.retrieveMenuItems();
			
			promise.then(function(response) {
				var serverResponse = response.data.menu_items;
				var output = menuSearchService.getMatchedMenuItems(description, serverResponse)
				
				narrowDown.list = output;
			})
			.catch(function(error) {
				narrowDown.noResults = "Nothing was found!";
			});
		};

		narrowDown.dontWantThis = function(itemIndex) {
			menuSearchService.removeFromFoundList(itemIndex);
		};
	}
	
	//service
	menuSearchService.$inject = ['$http'];
	function menuSearchService($http) {
		var service = this;
		var found = [];
		var foundResults;

		service.getMatchedMenuItems = function(description, data) {
			for (var i = 0; i < data.length; i++) {
				
				if ((description !== '') && (data[i].description.includes(description))) {
					
					foundResults = data[i];
					found.push(foundResults);
				}
				else{
					console.log("Nothing found!");
					// found = foundResults;
				}
			}
			return found;
		};

		service.retrieveMenuItems = function() {
			var response = $http({
				method: "GET",
				url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
			});

			return response;
		};

		service.removeFromFoundList = function(itemIndex) {
			found.splice(itemIndex, 1);
		};

		service.emptySearchHistory = function() {
			found.splice(0, found.length);
		};
	}

})();