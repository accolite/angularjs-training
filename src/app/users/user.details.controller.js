(function () {
    'use strict';

    angular
        .module("users")
        .controller("userDetailsController", userDetailsController);

    userDetailsController.$inject = ["$uibModalInstance", "booksBorrowed", "Books"];

    function userDetailsController($uibModalInstance, booksBorrowed, Books) {
        this.booksBorrowed = [];
        this.getBookDetails = function () {
            booksBorrowed.forEach(function (book) {
                this.booksBorrowed.push(Books.getBookById(book.bookId));
            }.bind(this));
        }

        this.close = function () {
            $uibModalInstance.close();
        }

        this.getBookDetails();
    }
})();