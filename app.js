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
		$scope.intro = function() {
			var my_intro = "I am Charles";
			var intro = $filter('uppercase')(my_intro);
			return intro;
		};
		$scope.country_name = "chuck";
		$scope.courseCost = .68;
		$scope.stateOfBeing = "relaxed";


		$scope.newMessage = function() {
			return "Am taking on a course on AngularJS with coursera";
		};
		$scope.getToWork = function() {
			$scope.stateOfBeing = "serious";
		};

		$scope.to_upper_case = function() {
			var Upcase = $filter('uppercase');
			$scope.country_name = Upcase($scope.country_name)

		};
	}
})();