'use strict';

angular.module('myApp.view2', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/view2', {
                    templateUrl: 'view2/view2.html',
                    controller: 'View2Ctrl'
                });
            }])

        .controller('View2Ctrl', ['$scope', 'view2Srvc', function ($scope, view2Srvc) {
                $scope.search = function (id) {
                    if (id === "" || id === undefined) {
                        return;
                    }
                    view2Srvc.query(id).success(function (data) {
                        $scope.machineModel = data;
                    });
                };

                $scope.createOrUpdate = function () {
                    var machine = $scope.machineModel;
                    if (machine === undefined) {
                        return;
                    }
                    if ($scope.idInputValue !== undefined && $scope.idInputValue !== "") {
                        machine.id = $scope.idInputValue;
                        view2Srvc.update(machine).success(function (data) {
                            alert("alterado com sucesso!");
                        });
                        $scope.machineModel = machine;
                    } else {
                        view2Srvc.add(machine).success(function (data) {
                            alert("cadastrado com sucesso!");
                        });
                        $scope.machineModel = {};
                        $scope.idInputValue = null;
                    }
                };
            }]);