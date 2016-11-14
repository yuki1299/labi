(function() {
    'use strict';

    angular
    .module('app.play_game')
    .controller('PlayGameController', PlayGameController);

    PlayGameController.$inject = [];

    /* @ngInject */
    function PlayGameController() {
        var vm = this;
        vm.settings = {
            enableFriends: true
        };

        activate();

        ////////////////

        function activate() {
        }
    }
})();
