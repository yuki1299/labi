(function() {
    'use strict';

    angular
    .module('app.menu')
    .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

        .state('menu', {
            url: '/menu',
            templateUrl: 'app/menu/menu.html',
            controller: 'MenuController as vm'
        });
    }
})();
