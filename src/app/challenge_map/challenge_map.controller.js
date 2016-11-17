(function() {
    'use strict';

    angular
    .module('app.challenge_map')
    .controller('ChallengeMapController', ChallengeMapController);

    ChallengeMapController.$inject = [];

    /* @ngInject */
    function ChallengeMapController() {
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
