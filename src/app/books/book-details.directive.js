(function() {
    'use strict';

	angular.module("books").
		directive("bookDetails", BookDetailsDirective);

	BookDetailsDirective.$inject = [];

	function BookDetailsDirective(){
		return {
			restrict: "EA",
			scope: {},
			templateUrl: "books-details.directive/html",
			link: function(scope, elem, attr){

			}
		}
	}

})();