(function () {
    'use strict';

    angular
        .module("users")
        .service("userService", userService);

    userService.$inject = ["$http"];

    function userService($http) {
        this.userList;
        this.fetchUsers = function () {
            var promise = $http.get("/src/data/users.json");
            promise.then(function (response) {
                if (response) {
                    this.userList = response.data.users;
                }
            }.bind(this));
            return promise;
        }

        this.getUserList = function () {
            return this.userList;
        }

        this.getBooksForUser = function (userName) {
            var books = [];
            this.userList.forEach(function (user) {
                if (user.userName === userName) {
                    books = user.booksBorrowed;
                    return false;
                }
            });
            return books;
        }
    }
})();