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
            var promise = $http.get("/src/data/users.json");
            promise.then(function (response) {
                if (response) {
                    that.userList = response.data.users;
                }
            });
            return promise;
        }

        this.getUserList = function(){
            return this.userList;
        }

        this.getUserByUserName = function (userName) {

        }
    }
})();