(function(){

	'use strict';

	angular.module('books')
	.controller("bookDetailCtrl", BooksDetailCtrl);

	BooksDetailCtrl.$inject = ["$scope", "Books", "$stateParams", "$uibModal", "userService"];

	function BooksDetailCtrl($scope, Books, $stateParams, $uibModal, userService){

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
											        },
											        usersList: function(){
											        	return userService.fetchUsers();
											        }
											      }
											    });

		    modalInstance.result.then(function (email, bookId) {
		    		//issue a book
		    		
			    }, function () {
			      console.log('Modal dismissed at: ' + new Date());
			});

		}
	}

})();

