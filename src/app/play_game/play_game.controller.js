(function() {
    'use strict';

    angular
    .module('app.play_game')
    .controller('PlayGameController', PlayGameController);

    PlayGameController.$inject = ['$scope', 'dragulaService'];

    /* @ngInject */
    function PlayGameController($scope, dragulaService) {
        var vm = this;
        vm.settings = {
            enableFriends: true
        };

        $scope.obj  = null;
        $scope.obj1 = null;
        $scope.obj2 = null;

        dragulaService.options($scope, 'bag-one', {
          copy: true
        });

        $scope.onDragComplete=function(data,evt){
            console.log("drag success, data:", data);
        }
        $scope.onDropComplete=function(data,evt){
            console.log("drop success, data:", data);
        }

        activate();

        ////////////////

        function activate() {
        }
    }
})();
