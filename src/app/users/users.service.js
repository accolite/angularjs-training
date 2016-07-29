(function () {
    'use strict';

    angular
        .module("users")
        .service("userService", userService);

    userService.$inject = ["$http"];

    function userService($http) {

        this.userList = undefined;

        this.fetchUsers = function () {

            if (!_.isUndefined(this.userList)) {
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

        this.isBookAlreadyIssued = function (bookId, user) {
            var isAlreadyIssued = false;
            user.booksBorrowed.forEach(function (book) {
                if (book.bookId === bookId) {
                    isAlreadyIssued = true;
                    return false;
                }
            });
            return isAlreadyIssued;
        }

        this.issueBooksForUser = function (email, bookId) {

            var success = false;

            this.userList.forEach(function (user) {
                if (user.email === email) {
                    if (!this.isBookAlreadyIssued(bookId, user)) {
                        user.booksBorrowed.push({
                            "bookId": bookId,
                            "dueDate":  Date.now() + (15 * 24 * 60 * 60)
                        });

                        success = true;
                    }else{
                        alert("Book already issued");
                        success = false;
                    }
                }
            }.bind(this));

            return success;
        }
    }
})();