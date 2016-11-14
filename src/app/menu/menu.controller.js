(function() {
    'use strict';

    angular
    .module('app.menu')
    .controller('MenuController', MenuController);

    MenuController.$inject = [];

    /* @ngInject */
    function MenuController() {
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
