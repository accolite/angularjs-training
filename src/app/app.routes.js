(function() {
    'use strict';

    angular
        .module('library')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/books');

    	$stateProvider
        .state('books', {
    		url: '/books',
    		templateUrl: 'src/app/books/books.html',
            controller: 'booksCtrl',
    	});
    }
})();