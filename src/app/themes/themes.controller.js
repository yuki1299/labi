(function() {
    'use strict';

    angular
    .module('app.themes')
    .controller('ThemesController', ThemesController);

    ThemesController.$inject = [];

    /* @ngInject */
    function ThemesController() {
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
