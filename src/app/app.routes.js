(function () {
    'use strict';

    angular
        .module('library')
        .config(config);

    config.$inject = ['$stateProvider','$urlRouterProvider'];

    function config($stateProvider,$urlRouterProvider) {

        $urlRouterProvider.otherwise("/books");
        $stateProvider.state('books', {
            url: '/books',
            templateUrl: 'src/app/books/books.html'
        }).state('users', {
            url: '/users',
            templateUrl: 'src/app/users/users.html',
            controller : 'usersController',
            controllerAs : 'users'
        });
    }

})();