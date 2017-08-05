(function () {
    'use strict';

// Declare app level module which depends on views, and components
    angular.module('simpleLawApp', [
        'mobile-angular-ui',
        'mobile-angular-ui.gestures',
        'ngRoute',
        'angular-google-analytics'
    ]).config(['AnalyticsProvider', function (AnalyticsProvider) {
        AnalyticsProvider.setAccount('UA-97094037-1');
    }]).run(['Analytics', function (Analytics) {
    }]);

})();
