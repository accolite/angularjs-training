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
			$uibModalInstance.close(
				{'email': $scope.selectedUser.email,
				'bookId': book.id }
				);
		  };

		  $scope.cancel = function () {
		    $uibModalInstance.dismiss('cancel');
		  };
	}

})();

