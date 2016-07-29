(function () {
    'use strict';

    angular
        .module("users")
        .controller("usersController", usersController);

    usersController.$inject = ["userService","userList"];
    function usersController(userService,userList) {
        this.userList = userList;
    }

})();