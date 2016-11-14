(function() {
    'use strict';

    angular
    .module('app.home')
    .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

        .state('tab.home', {
            url: '/home',
            views: {
                'tab-home': {
                    templateUrl: 'app/home/home.html',
                    controller: 'HomeController as vm'
                }
            }
        });
    }
})();
