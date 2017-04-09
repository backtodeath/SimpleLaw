'use strict';

angular.module('myApp.home', [])

.controller('HomeCtrl', ['$window', '$scope', 'Analytics', function ($window, $scope, Analytics) {
    $scope.bibleOpen = function () {
        Analytics.send({
            hitType: 'event',
            eventCategory: 'bible',
            eventAction: 'Click'
        });
        openLink('000000086472');
    };

    $scope.lazorsOpen = function () {
        Analytics.send({
            hitType: 'event',
            eventCategory: 'lazors',
            eventAction: 'Click'
        });
        openLink('000000090674');
    };

    $scope.footballOpen = function () {
        Analytics.send({
            hitType: 'event',
            eventCategory: 'football',
            eventAction: 'Click'
        });
        openLink('000000086304');
    };

    $scope.captainOpen = function () {
        Analytics.send({
            hitType: 'event',
            eventCategory: 'captain',
            eventAction: 'Click'
        });
        openLink('000000089387');
    };


    $scope.calcOpen = function () {
        Analytics.send({
            hitType: 'event',
            eventCategory: 'calc',
            eventAction: 'Click'
        });
        openLink('000000089386');
    };

    function openLink(appId) {
        $window.open(
            'tizenstore://ProductDetail/'+appId, '_blank'
        );
    }
}]);