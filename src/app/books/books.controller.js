(function(){

	'use strict';

	angular.module('books')
	.controller("booksCtrl", BooksCtrl);

	BooksCtrl.$inject = ["$scope", "Books"];

	function BooksCtrl($scope, Books){
		$scope.books = Books.getAllBooksWithQuantity();
	}


})();

