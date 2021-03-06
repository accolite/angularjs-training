(function () {
    'use strict';

    angular
        .module('library')
        .controller("appController", appController);

    appController.$inject = ["$scope", "$rootScope"];

    function appController($scope, $rootScope) {

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
           if(toState && toState.name === "users"){
               $scope.activeState = 1;
           }else if(toState.name && toState.name.indexOf("books") > -1){
               $scope.activeState = 0;
           }
        });
    }
})();