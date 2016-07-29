(function() {
    
    'use strict';

	angular.module("books")
		.service("Books", Books);

	Books.$inject = ['$http'];

	function Books($http){
		
		//to be populated eagerly
		this.books = undefined;

		this.loadAllBooks  = function(){
            
            if(!this.books){
            	var promise = $http.get("/src/data/books.json");
            
	            promise.then(function (response) {
	                if (response) {
	                    this.books = response.data.books;
	                }
	            }.bind(this));

	            return promise;
            }

		};

		this.getAllBooksWithQuantity = function(){
			return this.books;
		};

		this.getBookById = function(id){
			var index = _.findIndex(this.books, function(book) { return book.id == id; });
			return this.books[index];
		};

		this.issueBook = function(id){

		};

		this.addBook = function(name, author, publisher, language, category){
			//add to cache

			//add to repo
		};

	};

})();