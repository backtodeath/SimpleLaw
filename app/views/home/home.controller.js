(function() {
    'use strict';

    angular
        .module('simpleLawApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['Analytics', 'ShowText'];

    function HomeController (Analytics, ShowText) {
        var vm = this;
        /*vm.bibleOpen = function () {
            Analytics.send({
                hitType: 'event',
                eventCategory: 'bible CLICK'
            });
        };*/
        ShowText.showMessage();
    }
})();
