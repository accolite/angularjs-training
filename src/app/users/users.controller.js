(function () {
    'use strict';

    angular
        .module("users")
        .controller("usersController", usersController);

    usersController.$inject = ["userService", "userList"];
    function usersController(userService, userList) {
        if (userList && userList.data && userList.data.users) {
            this.userList = userList.data.users;
        }
    }

})();