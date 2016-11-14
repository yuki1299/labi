(function() {
    'use strict';

    angular
    .module('app', [
        /* Shared modules */
        'ionic',
        'app.core',

        /* Feature areas */
        'app.play_game',
        'app.menu',
        'app.home',
        'app.challenges',
        'app.themes',
        'app.how_to'
    ]);
})();
