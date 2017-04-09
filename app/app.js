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
            controller: ['$window', 'Analytics', function ($window, Analytics) {
                angular.element(document).ready(function () {
                    $window.open(
                        'tizenstore://ProductDetail/000000086472', '_blank'
                    );
                    Analytics.send({
                        hitType: 'event',
                        eventCategory: 'bible',
                        eventAction: 'Redirect'
                    });
                });
            }]
        }).when('/captain', {
            template: '<div></div>',
            controller: ['$window', 'Analytics', function ($window, Analytics) {
                angular.element(document).ready(function () {
                    $window.open(
                        'tizenstore://ProductDetail/000000089387', '_blank'
                    );
                    Analytics.send({
                        hitType: 'event',
                        eventCategory: 'captain',
                        eventAction: 'Redirect'
                    });
                });
            }]
        }).when('/football', {
            template: '<div></div>',
            controller: ['$window', 'Analytics', function ($window, Analytics) {
                angular.element(document).ready(function () {
                    $window.open(
                        'tizenstore://ProductDetail/000000086304', '_blank'
                    );
                    Analytics.send({
                        hitType: 'event',
                        eventCategory: 'football',
                        eventAction: 'Redirect'
                    });
                });
            }]
        }).when('/calc', {
            template: '<div></div>',
            controller: ['$window', 'Analytics', function ($window, Analytics) {
                angular.element(document).ready(function () {
                    $window.open(
                        'tizenstore://ProductDetail/000000089386', '_blank'
                    );
                    Analytics.send({
                        hitType: 'event',
                        eventCategory: 'calc',
                        eventAction: 'Redirect'
                    });
                });
            }]
        }).when('/lazors', {
            template: '<div></div>',
            controller: ['$window', 'Analytics', function ($window, Analytics) {
                angular.element(document).ready(function () {
                    $window.open(
                        'tizenstore://ProductDetail/000000090674', '_blank'
                    );
                });
                Analytics.send({
                    hitType: 'event',
                    eventCategory: 'lazors',
                    eventAction: 'Redirect'
                });
            }]
        }).otherwise({
            redirectTo: '/home'
        })
    }]);
