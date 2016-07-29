(function() {
    
    'use strict';

	angular.module("books")
		.service("Inventory", Inventory);

	Inventory.$inject = ['$http'];

	function Inventory($http){
		
		//to be populated eagerly
		this.inventory = undefined;

		this.loadInventory = function(){
            
            if(!this.inventory){
            	var promise = $http.get("/src/data/inventory.json");
            
	            promise.then(function (response) {
	                if (response) {
	                    this.inventory = response.data;
	                }
	            }.bind(this));

	            return promise;
            }

		};

		this.getQuantities = function(){
			return this.inventory;
		};

	};

})();