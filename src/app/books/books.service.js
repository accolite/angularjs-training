(function() {
    
    'use strict';

	angular.module("books")
		.service("Books", Books);

	Books.$inject = [];

	function Books(){
		//to be populated eagerly
		this.books = undefined;

		this.loadAllBooks  = function(){
			//http call and cache the data
		};

		this.getBooksWithQuantity = function(){

		};

		this.getBookById = function(){

		};

		this.addBook = function(name, author, publisher, language, category){
			//add to cache

			//add to repo
		};

	};

})();