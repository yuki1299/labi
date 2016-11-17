(function() {
    'use strict';

    angular
    .module('app.challenge_map2')
    .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

        .state('tab.challenge_map2', {
            url: '/challenge_map2',
            views: {
                'tab-challenge_map2': {
                    templateUrl: 'app/challenge_map2/challenge_map2.html',
                    controller: 'ChallengeMap2Controller as vm'
                }
            }
        });
    }
})();
