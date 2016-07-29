(function() {
    'use strict';

    angular
        .module('library')
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
    	$stateProvider.state('books', {
    		url: 'library/books',
    		templateUrl: 'src/app/books/books.html'
    	});
    }
})();