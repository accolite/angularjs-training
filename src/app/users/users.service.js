(function () {
    'use strict';

    angular
        .module("users")
        .service("userService", userService);

    userService.$inject = ["$http"];

    function userService($http) {
        this.userList;
        this.fetchUsers = function () {
            var that =this;
            $http.get("/src/data/users.json").then(function (response) {
                if (response) {
                    that.userList = response.data.users;
                }
            });
        }

        this.getUserList = function(){
            return this.userList;
        }

        this.getUserByUserName = function (userName) {

        }
    }
})();