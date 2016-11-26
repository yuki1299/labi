(function() {
    'use strict';

    angular
    .module('app.themes')
    .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

        .state('themes', {
            url: '/themes',
            templateUrl: 'app/themes/themes.html',
            controller: 'ThemesController as vm'
        });
    }
})();
