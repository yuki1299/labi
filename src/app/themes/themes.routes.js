(function() {
    'use strict';

    angular
    .module('app.themes')
    .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

        .state('tab.themes', {
            url: '/themes',
            views: {
                'tab-themes': {
                    templateUrl: 'app/themes/themes.html',
                    controller: 'ThemesController as vm'
                }
            }
        });
    }
})();
