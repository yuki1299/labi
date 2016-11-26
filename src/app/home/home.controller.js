(function() {
    'use strict';

    angular
    .module('app.home')
    .controller('HomeController', HomeController);

    HomeController.$inject = ['$cordovaBluetoothSerial', '$scope'];

    /* @ngInject */
    function HomeController($cordovaBluetoothSerial, $scope) {
        var vm = this;

        $scope.connect = function() {
            $cordovaBluetoothSerial.connect('20-16-05-11-53-99', function(success){
                alert('success: ' + success)
            }, function(error){
                alert('error: ' + error)
            });
        }
    }
})();
