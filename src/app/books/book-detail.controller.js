(function(){

	'use strict';

	angular.module('books')
	.controller("bookDetailCtrl", BooksCtrl);

	BooksCtrl.$inject = ["$scope", "Books", "$stateParams"];

	function BooksCtrl($scope, Books, $stateParams){
		$scope.book = Books.getBookById($stateParams.id);
	}


})();

