(function() {
    'use strict';

    angular
    .module('app.how_to')
    .controller('HowToController', HowToController);

    HowToController.$inject = [];

    /* @ngInject */
    function HowToController() {
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
