(function() {
    
    'use strict';

	angular.module("books")
		.service("Books", Books);

	Books.$inject = ['$http'];

	function Books($http){
		//to be populated eagerly
		this.books = undefined;

		this.loadAllBooks  = function(){
			$http.get("/src/data/books.json").then(function (response) {
                if (response) {
                    this.books = response.data.books;
                }
            }.bind(this));
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