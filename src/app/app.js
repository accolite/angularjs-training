(function () {
    'use strict';

    angular
        .module('library')
        .run(run);

    run.$inject = ["userService"];

    function run(userService) {
        userService.fetchUsers();
    }
})();