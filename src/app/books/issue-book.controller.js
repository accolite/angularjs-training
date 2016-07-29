(function(){

	'use strict';

	angular.module('books')
	.controller("IssueBookCtrl", IssueBookCtrl);

	IssueBookCtrl.$inject = ["$scope", "book"];

	function IssueBookCtrl($scope, book){

	}

})();

