(function(){

	'use strict';

	angular.module('books')
	.controller("bookDetailCtrl", BooksDetailCtrl);

	BooksDetailCtrl.$inject = ["$scope", "Books", "$stateParams", "$uibModal", "userService", "Inventory", "$state"];

	function BooksDetailCtrl($scope, Books, $stateParams, $uibModal, userService, Inventory, $state){

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

		    modalInstance.result.then(function (issueObj) {
		    		//issue a book
		    		var success = userService.issueBooksForUser(issueObj.email, issueObj.bookId);
		    		
		    		if(success){
		    			Inventory.bookIssued(issueObj.bookId);
		    		}	

		    		$state.go('books.list');	    			    		
		    		
			    }, function () {
			      console.log('Modal dismissed at: ' + new Date());
			});

		}
	}

})();

