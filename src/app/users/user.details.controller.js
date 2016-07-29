(function () {
    'use strict';

    angular
        .module("users")
        .controller("userDetailsController", userDetailsController);

    userDetailsController.$inject = ["$uibModalInstance","booksBorrowed"];

    function userDetailsController($uibModalInstance,booksBorrowed) {
        this.booksBorrowed = booksBorrowed;
        console.log(booksBorrowed);

        this.close = function(){
            $uibModalInstance.close();
        }
    }
})();