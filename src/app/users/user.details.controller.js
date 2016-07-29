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
                var bookDetail = Books.getBookById(book.bookId);
                this.booksBorrowed.push({
                    'name' : bookDetail.name,
                    'dueDate' : Date.now() + parseInt(book.dueDate)
                });
            }.bind(this));
        }

        this.close = function () {
            $uibModalInstance.close();
        }

        this.getBookDetails();
    }
})();