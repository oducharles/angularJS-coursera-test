(function() {
	'use strict';


	angular.module('SimpleFormApp', [])
	.controller('RegistrationController', RegistrationController);

	RegistrationController.$inject = ['$scope'];
	function RegistrationController($scope) {
		var reg = this;
		reg.submit =function() {
			reg.completed = true;
		};
	}
})();