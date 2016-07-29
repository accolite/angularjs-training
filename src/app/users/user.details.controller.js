(function () {
    'use strict';

    angular
        .module("users")
        .controller("userDetailsController", userDetailsController);

    userDetailsController.$inject = ["$uibModalInstance", "booksBorrowed", "Books"];

    function userDetailsController($uibModalInstance, booksBorrowed, Books) {

        this.getBookDetails = function () {
            booksBorrowed.forEach(function (book) {
                this.booksBorrowed.push(Books.getBookById(book.bookId));
            }.bind(this));
        }
        console.log(booksBorrowed);

        this.close = function () {
            $uibModalInstance.close();
        }
    }
})();