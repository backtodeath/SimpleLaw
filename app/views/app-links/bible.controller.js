'use strict';

angular.module('myApp.bible', [])

    .controller('BibleCtrl', ['$window', function ($window) {
        angular.element(document).ready(function () {
            $window.open(
                'tizenstore://ProductDetail/000000090674', '_blank'
            );
        });
    }]);