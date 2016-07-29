(function () {
    'use strict';

    angular
        .module('library')
        .controller(appController);

    appController.$inject = [];

    function appController() {
       this.activeState = 0; 
    }
})();