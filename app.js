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
/*
(function() {
	'use strict';

	angular.module('DIApp', [])
	.controller('DIController', ['$scope', '$filter', DIControllerFunction]);

	function DIControllerFunction($scope, $filter) {
		$scope.country_name = "";

		$scope.to_upper_case = function() {
			var Upcase = $filter('uppercase');
			$scope.country_name = Upcase($scope.country_name)

		};
	}
})();*/

!function(){"use strict";angular.module("DIApp",[]).controller("DIController",["$scope","$filter",function(n,e){n.country_name="",n.to_upper_case=function(){var o=e("uppercase");n.country_name=o(n.country_name)}}])}();