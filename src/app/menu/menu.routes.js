(function() {
    'use strict';

    angular
    .module('app.menu')
    .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

        .state('tab.menu', {
            url: '/menu',
            views: {
                'tab-menu': {
                    templateUrl: 'app/menu/menu.html',
                    controller: 'MenuController as vm'
                }
            }
        });
    }
})();
