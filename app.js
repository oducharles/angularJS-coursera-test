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

	angular.module('BookCounter', [])
	.controller('LibraryBooks', function($scope) {
		// $scope.title = "";
		$scope.bookname = "";
		$scope.total_number_of_letters = 0;

		$scope.get_numeric_total = function() {
			var accumulated_total = accumulateTotal($scope.bookname);
			$scope.total_number_of_letters = accumulated_total;

		};

		function accumulateTotal(string) {
			var total_book_letters = 0;
			for (var i = 0; i < string.length; i++) {
				total_book_letters += string.charCodeAt(i);
			}

			return total_book_letters;
		}
	});
})();