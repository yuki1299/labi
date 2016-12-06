(function() {
    'use strict';

    angular
    .module('app.home')
    .controller('HomeController', HomeController);

    HomeController.$inject = ['$cordovaBluetoothLE', '$scope', '$ionicPopup', '$interval'];

    /* @ngInject */
    function HomeController($cordovaBluetoothLE, $scope, $ionicPopup, $interval) {
        var vm = this;

        $scope.$on("$ionicView.beforeEnter", function () {
            // $scope.selectedDevice = $scope.devices[$stateParams.address];
        });


        function addDevice(obj) {
            if (obj.status == "scanStarted") {
              return;
            }

            if ($rootScope.devices[obj.address] !== undefined) {
              return;
            }

            obj.services = {};
            $rootScope.devices[obj.address] = obj;
        }

        $scope.initialize = function() {
            var params = {
              request: true,
              //restoreKey: "bluetooth-test-app"
            };

            $ionicPopup.alert({
                title: 'Initialize',
                template: JSON.stringify(params)
            });

            $cordovaBluetoothLE.initialize(params).then(null, function(obj) {

                $ionicPopup.alert({
                    title: 'Initialize error',
                    template: JSON.stringify(obj)
                });


            }, function(obj) {
                $ionicPopup.alert({
                    title: 'Initialize success',
                    template: JSON.stringify(obj)
                });
            });
        }

        $scope.retrieveConnected = function() {
           var params = {services:["180D"]};

           alert("Retrieve Connected : " + JSON.stringify(params));

           $cordovaBluetoothLE.retrieveConnected(params).then(function(obj) {
             alert("Retrieve Connected Success : " + JSON.stringify(obj));

             for (var i = 0; i < obj.length; i++) {
               addDevice(obj[i]);
             }
           }, function(obj) {
             alert("Retrieve Connected Error : " + JSON.stringify(obj));
           });
         };

        $scope.scan = function() {
            var params = {
              services:[],
              allowDuplicates: false,
              //scanTimeout: 15000,
            };

            if (window.cordova) {
              params.scanMode = bluetoothle.SCAN_MODE_LOW_POWER;
              params.matchMode = bluetoothle.MATCH_MODE_STICKY;
              params.matchNum = bluetoothle.MATCH_NUM_ONE_ADVERTISEMENT;
              //params.callbackType = bluetoothle.CALLBACK_TYPE_FIRST_MATCH;
            }

            alert("Start Scan : " + JSON.stringify(params));

            $cordovaBluetoothLE.startScan(params).then(function(obj) {
              alert("Start Scan Auto Stop : " + JSON.stringify(obj));
            }, function(obj) {
              alert("Start Scan Error : " + JSON.stringify(obj));
            }, function(obj) {
              alert("Start Scan Success : " + JSON.stringify(obj));

              addDevice(obj);
            });
        }

        $scope.testCommand = function() {
        //Set this to something higher to verify queueing on read/write
            var count = 1;

            alert('enviado');

            $interval(function() {
              var params = {
                address: "20:16:05:11:53:99",
                characteristic: "2a38",
                type: "noResponse",
                service: "180d",
                value: $cordovaBluetoothLE.bytesToEncodedString($cordovaBluetoothLE.stringToBytes("motorA_CC")),
                timeout: 5000
              };

              //Uncomment if you'd like to force some errors
              /*var random = Math.random();
              if (random < .50) {
                params.address = "AA:AA:AA:AA:AA:AA";
              }*/

              alert("Write : " + JSON.stringify(params));
              $cordovaBluetoothLE.write(params).then(function(obj) {
                alert("Write Success : " + JSON.stringify(obj));
              }, function(obj) {
                alert("Write Error : " + JSON.stringify(obj));
              });
            }, 1, count);
        };

        $scope.testD = function() {
        //Set this to something higher to verify queueing on read/write
            var count = 1;

            alert('enviado');

            $interval(function() {
              var params = {
                address: "20:16:05:11:53:99",
                characteristic: "2a38",
                type: "noResponse",
                service: "180d",
                value: $cordovaBluetoothLE.bytesToEncodedString($cordovaBluetoothLE.stringToBytes("D")),
                timeout: 5000
              };

              //Uncomment if you'd like to force some errors
              /*var random = Math.random();
              if (random < .50) {
                params.address = "AA:AA:AA:AA:AA:AA";
              }*/

              alert("Write : " + JSON.stringify(params));
              $cordovaBluetoothLE.write(params).then(function(obj) {
                alert("Write Success : " + JSON.stringify(obj));
              }, function(obj) {
                alert("Write Error : " + JSON.stringify(obj));
              });
            }, 1, count);
        };

        $scope.testF = function() {
        //Set this to something higher to verify queueing on read/write
            var count = 1;

            alert('enviado');

            $interval(function() {
              var params = {
                address: "HC-06",
                characteristic: "2a38",
                type: "noResponse",
                service: "180d",
                value: $cordovaBluetoothLE.bytesToEncodedString($cordovaBluetoothLE.stringToBytes("F")),
                timeout: 5000
              };

              //Uncomment if you'd like to force some errors
              /*var random = Math.random();
              if (random < .50) {
                params.address = "AA:AA:AA:AA:AA:AA";
              }*/

              alert("Write : " + JSON.stringify(params));
              $cordovaBluetoothLE.write(params).then(function(obj) {
                alert("Write Success : " + JSON.stringify(obj));
              }, function(obj) {
                alert("Write Error : " + JSON.stringify(obj));
              });
            }, 1, count);
        };

        $scope.testE = function() {
        //Set this to something higher to verify queueing on read/write
            var count = 1;

            alert('enviado');

            $interval(function() {
              var params = {
                address: "20:16:05:11:53:99",
                characteristic: "2a38",
                type: "noResponse",
                service: "180d",
                value: bluetoothSerial.write("E", success, failure);
                timeout: 5000
              };

              //Uncomment if you'd like to force some errors
              /*var random = Math.random();
              if (random < .50) {
                params.address = "AA:AA:AA:AA:AA:AA";
              }*/

              alert("Write : " + JSON.stringify(params));
              $cordovaBluetoothLE.write(params).then(function(obj) {
                alert("Write Success : " + JSON.stringify(obj));
              }, function(obj) {
                alert("Write Error : " + JSON.stringify(obj));
              });
            }, 1, count);
        };


        $scope.discover = function() {
            var params = {
              address: "20:16:05:11:53:99",
              timeout: 10000
            };

            alert("Discover : " + JSON.stringify(params));

            $cordovaBluetoothLE.discover(params).then(function(obj) {
              alert("Discover Success : " + JSON.stringify(obj));

              var device = $scope.devices[obj.address];

              alert(device);

              var services = obj.services;

              alert(JSON.stringify(services));

              var characteristics = service.characteristics;

              alert (JSON.stringify(characteristics));

              // for (var i = 0; i < services.length; i++) {
              //   var service = services[i];

              //   addService(service, device);

              //   var serviceNew = device.services[service.uuid];

              //   var characteristics = service.characteristics;

              //   for (var j = 0; j < characteristics.length; j++) {
              //     var characteristic = characteristics[j];

              //     addCharacteristic(characteristic, serviceNew);

              //     var characteristicNew = serviceNew.characteristics[characteristic.uuid];

              //     var descriptors = characteristic.descriptors;

              //     for (var k = 0; k < descriptors.length; k++) {
              //       var descriptor = descriptors[k];

              //       addDescriptor(descriptor, characteristicNew);
              //     }
              //   }
              // }
            }, function(obj) {
              alert("Discover Error : " + JSON.stringify(obj));
            });
          };


        $scope.connect = function() {
            $cordovaBluetoothLE.connect({ address: "20:16:05:11:53:99"} ).then(null,
                function(obj) {
                    //Handle errors
                    console.log(obj.message);
                    $ionicPopup.alert({
                     title: 'error',
                     template: obj.message
                    });
                },
                function(obj) {
                  if (obj.status == "connected") {
                    //Device connected
                    $ionicPopup.alert({
                     title: 'Conectado',
                     template: obj.status
                    });
                  } else {
                    //Device disconnected, handle this unexpected disconnect
                  }
                }
            );
        }
    }
})();
