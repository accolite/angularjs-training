(function () {
    'use strict';

    angular
        .module("users")
        .controller("usersController", usersController);

    usersController.$inject = ["$scope", "userService", "userListResponse", "$uibModal"];
    function usersController($scope, userService, userListResponse, $uibModal) {

        this.userList = undefined;

        this.initializeUserData = function () {
            this.userList = userService.getUserList();
        }

        this.initializeGridOptions = function () {
            this.gridOptions = {
                columnDefs: [
                    {
                        name: 'Name',
                        field: 'name',
                    }, {
                        name: 'User Name',
                        field: 'userName'
                    }, {
                        name: 'Email',
                        field: 'email'
                    }, {
                        name: 'Books Borrowed',
                        field: '',
                        cellTemplate: "<button class='btn btn-default' style='margin-left:25%;margin-top:5px;' ng-click='grid.appScope.openBooksModal(row)'>Books Borrowed</button>"
                    }
                ],
                data: this.userList,
                rowHeight: 40,
                appScopeProvider: this
            };
        }


        this.openBooksModal = function (row) {
            if (row && row.entity) {
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'src/app/users/user.details.html',
                    controller: 'userDetailsController',
                    controllerAs: 'userDetails',
                    size: 'sm',
                    resolve: {
                        booksBorrowed: ["userService", function (userService) {
                            return userService.getBooksForUser(row.entity.userName);
                        }]
                    }
                });
            }
        }
        this.initializeUserData();
        this.initializeGridOptions();

    }

})();