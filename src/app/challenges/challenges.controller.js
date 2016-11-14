(function() {
    'use strict';

    angular
    .module('app.challenges')
    .controller('ChallengesController', ChallengesController);

    ChallengesController.$inject = [];

    /* @ngInject */
    function ChallengesController() {
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
