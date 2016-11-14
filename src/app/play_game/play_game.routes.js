(function() {
    'use strict';

    angular
    .module('app.play_game')
    .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

        .state('tab.play_game', {
            url: '/play_game',
            views: {
                'tab-play_game': {
                    templateUrl: 'app/play_game/play_game.html',
                    controller: 'PlayGameController as vm'
                }
            }
        });
    }
})();
