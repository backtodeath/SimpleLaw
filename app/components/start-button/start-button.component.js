(function () {
    'use strict';

    var startButton = {
        templateUrl: 'components/start-button/start-button.template.html',
        controller: StartButtonController,
        bindings: {
        }
    };

    angular
        .module('simpleLawApp')
        .component('startButton', startButton);

    StartButtonController.$inject = [];

    function StartButtonController() {
        var vm = this;

        vm.click = function () {
            console.log('asd');
        };
    }
})();
