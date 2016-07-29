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
                template: "<div ui-view></div>",
                resolve: {
                    bookList: ["Books", function (Books) {
                        return Books.loadAllBooks();
                    }],
                    inventoryDetail: ["Inventory", function (Inventory) {
                        return Inventory.loadInventory();
                    }]
                }
            })
            .state('books.list', {
                url: '/list',
                templateUrl: 'src/app/books/books.html',
                controller: 'booksCtrl'
            })
            .state('books.detail', {
                url: '/detail/:id',
                templateUrl: 'src/app/books/book-detail.html',
                controller: 'bookDetailCtrl'
            })
            .state('users', {
                url: '/users',
                templateUrl: 'src/app/users/users.html',
                controller: 'usersController',
                controllerAs: 'users',
                resolve: {
                    userListResponse: ["userService", function (userService) {
                        var user = userService.fetchUsers();
                        return user;
                    }],
                    bookList: ["Books", function (Books) {
                        return Books.loadAllBooks();
                    }],

                }
            });
    }

})();