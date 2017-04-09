'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.home',
    'angular-google-analytics'
]).config(['AnalyticsProvider', function (AnalyticsProvider) {
    AnalyticsProvider.setAccount('UA-97094037-1');
}])
    .run(['Analytics', function (Analytics) {
    }])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            }).when('/bible', {
            template: '<div></div>',
            controller: ['$window', function ($window) {
                angular.element(document).ready(function () {
                    $window.open(
                        'tizenstore://ProductDetail/000000086472', '_blank'
                    );
                });
            }]
        }).when('/captain', {
            template: '<div></div>',
            controller: ['$window', function ($window) {
                angular.element(document).ready(function () {
                    $window.open(
                        'tizenstore://ProductDetail/000000089387', '_blank'
                    );
                });
            }]
        }).when('/football', {
            template: '<div></div>',
            controller: ['$window', function ($window) {
                angular.element(document).ready(function () {
                    $window.open(
                        'tizenstore://ProductDetail/000000086304', '_blank'
                    );
                });
            }]
        }).when('/calc', {
            template: '<div></div>',
            controller: ['$window', function ($window) {
                angular.element(document).ready(function () {
                    $window.open(
                        'tizenstore://ProductDetail/000000089386', '_blank'
                    );
                });
            }]
        }).when('/lazors', {
            template: '<div></div>',
            controller: ['$window', function ($window) {
                angular.element(document).ready(function () {
                    $window.open(
                        'tizenstore://ProductDetail/000000090674', '_blank'
                    );
                });
            }]
        }).otherwise({
            redirectTo: '/main'
        })
    }]);
