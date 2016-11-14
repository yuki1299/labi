(function() {
    'use strict';

    angular
    .module('app.how_to')
    .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

        .state('tab.how_to', {
            url: '/how_to',
            views: {
                'tab-how_to': {
                    templateUrl: 'app/how_to/how_to.html',
                    controller: 'HowToController as vm'
                }
            }
        });
    }
})();
