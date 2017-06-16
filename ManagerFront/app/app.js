'use strict';
// Declare app level module which depends on views, and components
        angular.module('myApp', [
                'ngRoute',
                'myApp.view1',
                'myApp.view2',
                'timer',
                ]).
        config(['$locationProvider', '$routeProvider', '$httpProvider', function($locationProvider, $routeProvider, $httpProvider) {
        $locationProvider.hashPrefix('!');
                $httpProvider.defaults.useXDomain = true;
                //Remove the header used to identify ajax call  that would prevent CORS from working
                delete $httpProvider.defaults.headers.common['X-Requested-With'];
                $routeProvider.otherwise({redirectTo: '/view1'});
        }]);
