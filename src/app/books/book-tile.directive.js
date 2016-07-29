(function() {
    'use strict';

	angular.module("books").
		directive("bookDetails", BookDetailsDirective);

	BookDetailsDirective.$inject = [];

	function BookDetailsDirective(){
		return {
			restrict: "EA",
			scope: {
				name: "=",
				bookId: "@",
				category: "@",
				quantity: "=",
				author: "@"
			},
			templateUrl: "src/app/books/book-tile.directive.html",
			link: function(scope, elem, attr){

			}
		}
	}

})();