(function () {
    'use strict';

    angular
        .module('simpleLawApp')
        .config(stateConfig);

    stateConfig.$inject = ['$routeProvider'];

    function stateConfig($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'views/home/home.html',
                controller: 'HomeController',
                controllerAs: 'vm',
                reloadOnSearch: false
            })
            .when('/about', {
                templateUrl: 'views/about/about.html',
                reloadOnSearch: false
            })
            .when('/services', {
                templateUrl: 'views/services/services.html',
                reloadOnSearch: false
            })
           /* .when('/how-it-works', {
                templateUrl: 'views/how-it-works/how-it-works.html',
                reloadOnSearch: false
            })*/
            .when('/faq', {
                templateUrl: 'views/faq/faq.html',
                reloadOnSearch: false
            })
            .when('/useful-info', {
                templateUrl: 'views/useful-info/useful-info.html',
                reloadOnSearch: false
            })
            .when('/contacts', {
                templateUrl: 'views/contacts/contacts.html',
                reloadOnSearch: false
            })
            .otherwise({
                redirectTo: '/home'
            })
    }
})();
