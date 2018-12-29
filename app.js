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

	angular.module('DIApp', [])
	.controller('DIController', function($scope, $filter) {
		$scope.country_name = "";

		$scope.to_upper_case = function() {
			var Upcase = $filter('uppercase');
			$scope.country_name = Upcase($scope.country_name)

		};
	});
})();