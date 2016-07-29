(function(){

	'use strict';

	angular.module('books')
	.controller("bookDetailCtrl", BooksDetailCtrl);

	BooksDetailCtrl.$inject = ["$scope", "Books", "$stateParams", "$uibModal"];

	function BooksDetailCtrl($scope, Books, $stateParams, $uibModal){

		$scope.book = Books.getBookById($stateParams.id);

		$scope.openBookIssueModal = function(id){
			  
			  var modalInstance = $uibModal.open({
											      animation: true,
											      templateUrl: 'src/app/books/issue-book.html',
											      controller: 'IssueBookCtrl',
											      size: 'sm',
											      resolve: {
											        book: function () {
											          return $scope.book;
											        }
											      }
											    });

		    modalInstance.result.then(function (bookId) {
			      $scope.issuedBook = bookId;
			    }, function () {
			      console.log('Modal dismissed at: ' + new Date());
			});

		}
	}

})();

