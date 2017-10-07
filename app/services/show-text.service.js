(function () {
    'use strict';

    angular
        .module('simpleLawApp')
        .factory('ShowText', ShowText);

    ShowText.$inject = ['MESSAGES', '$rootScope'];

    function ShowText(MESSAGES, $rootScope) {
        var service = {
            showMessage: showMessage
        };
        var target = '.text-target';
        var messages = MESSAGES;
        var interval = 50;
        var index = 0;

        function showMessage(interval) {
            if ($rootScope.shouldShowText) {
                var message = getNextMessage();
                showText(message, interval, 0);
            }
        }

        function showText(message, index) {
            var element = document.querySelector(target);
            if (element === null) {
                return;
            }
            if (index === 0) {
                angular.element(element).html('');
            }
            if (index < message.length) {
                element.append(message[index++]);
                setTimeout(function () {
                    showText(message, index);
                }, interval);
            } else {
                setTimeout(function () {
                    showText(getNextMessage(), 0);
                }, 800);

            }
        }

        function getNextMessage() {
            if (index === messages.length) {
                index = 0;
            }
            return messages[index++];
        }

        return service;
    }
})();
