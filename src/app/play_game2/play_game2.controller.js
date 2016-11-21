(function() {
    'use strict';

    angular
    .module('app.play_game2')
    .controller('PlayGame2Controller', PlayGame2Controller);

    PlayGame2Controller.$inject = [];

    /* @ngInject */
    function PlayGame2Controller() {
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
