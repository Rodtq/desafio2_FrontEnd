'use strict';
angular.module('myApp.view1', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/view1', {
                    templateUrl: 'view1/view1.html',
                    controller: 'View1Ctrl'
                });
            }])

        .controller('View1Ctrl', ['$scope', 'view1Srvc', function ($scope, view1Srvc) {
                $scope.credentials = {};
                $scope.credentials.password = "";
                $scope.credentials.user = "";
                const countdownTime = 300;
                $scope.countdownVal = countdownTime;
                $scope.callbackTimer = function () {
                    $scope.countdownVal = 5;
                    $scope.$broadcast('timer-add-cd-seconds', countdownTime);
                    $scope.manualRefresh();
                };
                $scope.manualRefresh = function () {
                    view1Srvc.refresh().success(function (response) {
                        $scope.machineList = response;
                    });
                };
                $scope.togglePower = function (id, powerStatus) {
                    view1Srvc.turnOnOff(id, powerStatus).success(function (response) {
                        $scope.manualRefresh();
                        alert("estado trocado com sucesso");
                    });
                };
                $scope.connect = function (address) {
                    view1Srvc.connectToMachine(address, $scope.credentials.user, $scope.credentials.password).success(function (response) {
                        $scope.manualRefresh();
                        alert("conectado com sucesso");
                    });
                };
                $scope.disconnect = function (address) {
                    view1Srvc.disconnectFromMachine(address).success(function (response) {
                        $scope.manualRefresh();
                        alert("desconectado com sucesso");
                    });
                    ;
                };
                $scope.remove = function (id) {
                    view1Srvc.exclude(id).success(function (response) {
                        $scope.manualRefresh();
                        alert("removido com sucesso");
                    });
                    ;
                };
                var init = function () {
                    view1Srvc.refresh().success(function (response) {
                        $scope.manualRefresh();
                    });
                };

                init();

            }]);