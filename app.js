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
	.controller('MessageController', MessageControllerFunction);

	MessageControllerFunction.$inject = ['$scope', '$filter'];

	function MessageControllerFunction($scope, $filter) {
		$scope.message = "I am Charles";
		$scope.country_name = "chuck";


		$scope.newMessage = function() {
			return "Am taking on a course on AngularJS with coursera";
		};

		$scope.to_upper_case = function() {
			var Upcase = $filter('uppercase');
			$scope.country_name = Upcase($scope.country_name)

		};
	}
})();