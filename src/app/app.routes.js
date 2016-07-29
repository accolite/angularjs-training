(function () {
    'use strict';

    angular
        .module('library')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/books/list');

    	$stateProvider
        .state('books', {
            abstract: true,
    		url: '/books',
            template : "<div ui-view></div>",
            resolve:{

            }
    	})
        .state('books.list', {
            url: '/list',
            templateUrl: 'src/app/books/books.html',
        })
        .state('books.detail', {
            url: '/detail/:id'
        })
        .state('users', {
                url: '/users',
                templateUrl: 'src/app/users/users.html',
                controller: 'usersController',
                controllerAs: 'users',
                resolve: {
                    userList: ["userService", function (userService) {
                         var user = userService.fetchUsers();
                         return user;
                    }]
                }
        });
    }

})();