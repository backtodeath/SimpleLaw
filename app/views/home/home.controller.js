(function() {
    'use strict';

    angular
        .module('simpleLawApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['Analytics', 'ShowText', '$rootScope', '$http', 'SharedState'];

    function HomeController (Analytics, ShowText, $rootScope, $http, SharedState) {
        var vm = this;
        /*vm.bibleOpen = function () {
            Analytics.send({
                hitType: 'event',
                eventCategory: 'bible CLICK'
            });
        };*/
        ShowText.showMessage();
        $rootScope.shouldShowText = false;
        vm.sendOrder = sendOrder;

        function sendOrder() {
            SharedState.turnOff('order');
           /* $http.post('api/account/change-password', {
                newPassword: vm.newPassword,
                oldPassword: vm.oldPassword
            }).then(function success() {
                vm.passwordChanged = true;
            }, function error(response) {
                if (response.status === 404) {
                    vm.wrongOldPassword = true;
                }
            });*/
        }
    }
})();
