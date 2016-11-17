(function() {
    'use strict';

    angular
    .module('app.challenge_map2')
    .controller('ChallengeMap2Controller', ChallengeMap2Controller);

    ChallengeMap2Controller.$inject = [];

    /* @ngInject */
    function ChallengeMap2Controller() {
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
