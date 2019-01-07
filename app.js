/*(function() {
	'use strict';

	var appName = angular.module('myFirstAngularJSApp', []);

	appName.controller('myFirstController', function($scope) {
		$scope.name = "Charlie";
		$scope.sayHello = function() {

			return "Hello everyone at coursera";
		}
	});
})();*/

(function() {
	'use strict';

	angular.module('MessageApp', [])
	.controller('MessageController', MessageControllerFunction)
	.filter('freeCost', appendFreeFilter)
	.filter('courseLabel', changeLabel);

	MessageControllerFunction.$inject = ['$scope', '$filter', 'freeCostFilter', 'courseLabelFilter']

	function MessageControllerFunction($scope, $filter, freeCostFilter, courseLabelFilter) {
		$scope.intro = function() {
			var my_intro = "I am Charles";
			var intro = $filter('uppercase')(my_intro);
			return intro;
		};

		$scope.country_name = "OCl@chuck";
		$scope.courseCost = .780;
		$scope.stateOfBeing = "relaxed";


		$scope.getItemsForLunch = "";
		$scope.lunchMessage = "";


		$scope.newMessage = function() {
			return "Am taking a course on AngularJS with coursera";
		};

		$scope.changeToProgram = function() {
			var msg = "Am taking a course on AngularJS with coursera";
			msg = courseLabelFilter(msg);
			return msg;
		};

		$scope.appendFreeCost = function() {
			var price = "";
			price = freeCostFilter(price);
			return price;
		};

		$scope.getToWork = function() {
			$scope.stateOfBeing = "serious";
		};

		$scope.to_upper_case = function() {
			var Upcase = $filter('uppercase');
			$scope.country_name = Upcase($scope.country_name)
		};


		$scope.checkItemsForLunch = function() {
			var lunch = $scope.getItemsForLunch;
			var itemArray = lunch.split(', ');
			
			if (itemArray.length == 1) {
				$scope.colorClass = "red";
				$scope.borderColor = "red_border";
				$scope.lunchMessage = "Please enter data first";
			}
			else if (itemArray.length <= 3) {
				$scope.colorClass = "green";
				$scope.borderColor = "green_border";
				$scope.lunchMessage = "Enjoy";
			}
			else{
				$scope.colorClass = "green";
				$scope.borderColor = "green_border";
				$scope.lunchMessage = "Too Much";
			}

		};
	}

	function appendFreeFilter() {
		return function(input) {
			input = input || "";
			input = input+ " FREE";
			return input;
		};
	}

	function changeLabel() {
		return function(input) {
			var input = input || "";
			input = input.replace("course", "Programme");
			return input;
		};
	}
})();