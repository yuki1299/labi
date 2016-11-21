(function() {
    'use strict';

    angular
    .module('app.play_game2')
    .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

        .state('tab.play_game2', {
            url: '/play_game2',
            views: {
                'tab-play_game2': {
                    templateUrl: 'app/play_game2/play_game2.html',
                    controller: 'PlayGame2Controller as vm'
                }
            }
        });
    }
})();
