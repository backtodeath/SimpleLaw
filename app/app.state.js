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
                controller: 'HomeController'
            }).otherwise({
            redirectTo: '/home'
        })
    }
})();
