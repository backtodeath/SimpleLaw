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
                    window.location.replace('http://tinyurl.com/mpecu7y');
                    Analytics.send({
                        hitType: 'event',
                        eventCategory: 'bible REDIRECT'
                    });
                });
            }]
        }).when('/captain', {
            template: '<div></div>',
            controller: ['$window', 'Analytics', function ($window, Analytics) {
                angular.element(document).ready(function () {
                    window.location.replace('http://tinyurl.com/mtxccfl');
                    Analytics.send({
                        hitType: 'event',
                        eventCategory: 'captain REDIRECT'
                    });
                });
            }]
        }).when('/football', {
            template: '<div></div>',
            controller: ['$window', 'Analytics', function ($window, Analytics) {
                angular.element(document).ready(function () {
                    window.location.replace('http://tinyurl.com/klr76zc');
                    Analytics.send({
                        hitType: 'event',
                        eventCategory: 'football REDIRECT'
                    });
                });
            }]
        }).when('/calc', {
            template: '<div></div>',
            controller: ['$window', 'Analytics', function ($window, Analytics) {
                angular.element(document).ready(function () {
                    window.location.replace('http://tinyurl.com/kcstmo8');
                    Analytics.send({
                        hitType: 'event',
                        eventCategory: 'calc REDIRECT'
                    });
                });
            }]
        }).when('/lazors', {
            template: '<div></div>',
            controller: ['$window', 'Analytics', function ($window, Analytics) {
                angular.element(document).ready(function () {
                    window.location.replace('http://tinyurl.com/lbro87d');
                });
                Analytics.send({
                    hitType: 'event',
                    eventCategory: 'lazors REDIRECT'
                });
            }]
        }).otherwise({
            redirectTo: '/home'
        })
    }]);
