(function () {
    'use strict';

// Declare app level module which depends on views, and components
    angular.module('simpleLawApp', [
        'mobile-angular-ui',
        'mobile-angular-ui.gestures',
        'ngRoute',
        'bc.TelephoneFilter',
        'angular-google-analytics'
    ]).config(['AnalyticsProvider', function (AnalyticsProvider) {
        AnalyticsProvider.setAccount('UA-97094037-1');
    }]).run(['Analytics', function (Analytics) {
    }]).directive('formattedPhone', function ($filter) {
        return {
            link: function (scope, element, attrs, ctrl) {
                ctrl.$parsers.unshift(function (viewValue) {
                    ctrl.$setViewValue($filter('bcTelephone')(viewValue, 'format'));
                    ctrl.$render();
                    return true;
                });
            },
            require: 'ngModel'
        }
    });
})();
