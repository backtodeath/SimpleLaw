'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.home',
    'myApp.bible'
])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home',  {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        });
        $routeProvider.when('/bible',  {
            templateUrl: 'views/app-links/bible.html',
                controller: ['$window', function ($window) {
                angular.element(document).ready(function () {
                    $window.open(
                        'tizenstore://ProductDetail/000000090674', '_blank'
                    );
                });
            }]
        });
    }]);
