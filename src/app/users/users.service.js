(function () {
    'use strict';

    angular
        .module("users")
        .service("userService", userService);

    userService.$inject = ["$http"];

    function userService($http) {
        this.userList = undefined;
        this.fetchUsers = function () {
            
            if(!_.isUndefined(this.userList)){
                return this.userList;
            }
            
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

        this.issueBooksForUser = function(userName,bookId){
            this.userList.forEach(function (user) {
                if (user.userName === userName) {
                    user.booksBorrowed.push({
                        "bookId" : bookId,
                        "dueDate" : new Date()
                    });
                }
            });
        }
    }
})();