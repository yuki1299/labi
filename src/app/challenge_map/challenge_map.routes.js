(function() {
    'use strict';

    angular
    .module('app.challenge_map')
    .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

        .state('challenge_map', {
            url: '/challenge_map',
            templateUrl: 'app/challenge_map/challenge_map.html',
            controller: 'ChallengeMapController as vm'
        });
    }
})();
