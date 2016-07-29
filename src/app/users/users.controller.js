(function () {
    'use strict';

    angular
        .module("users")
        .controller("usersController", usersController);

    usersController.$inject = ["userService"];
    function usersController(userService) {
        this.userList = userService.getUserList();

    }

})();