(function() {
    'use strict';

    angular
    .module('app.challenges')
    .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

        .state('tab.challenges', {
            url: '/challenges',
            views: {
                'tab-challenges': {
                    templateUrl: 'app/challenges/challenges.html',
                    controller: 'ChallengesController as vm'
                }
            }
        });
    }
})();
