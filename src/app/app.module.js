(function() {
    'use strict';

    angular
    .module('app', [
        /* Shared modules */
        'ionic',
        'app.core',
        'ngCordova',
        'ngCordovaBluetoothLE',

        /* Feature areas */
        'app.play_game',
        'app.play_game2',
        'app.menu',
        'app.home',
        'app.challenges',
        'app.themes',
        'app.how_to',
        'app.challenge_map',
        'app.challenge_map2'
    ]);
})();
