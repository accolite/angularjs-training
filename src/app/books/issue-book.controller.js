(function(){

	'use strict';

	angular.module('books')
	.controller("IssueBookCtrl", IssueBookCtrl);

	IssueBookCtrl.$inject = ["$scope", "$uibModalInstance", "book", "userService"];

	function IssueBookCtrl($scope, $uibModalInstance, book, userService){
		  
		  $scope.users = userService.getUserList();

		  $scope.borrowerName = 'Select a User';

		  $scope.selectUser = function(user){
		  	$scope.selectedUser = user;
		  	$scope.borrowerName = user.name;
		  };

		  $scope.ok = function () {
				userService.issueBooksForUser($scope.selectedUser.email,book.id);
		    $uibModalInstance.close();
		  };

		  $scope.cancel = function () {
		    $uibModalInstance.dismiss('cancel');
		  };
	}

})();

