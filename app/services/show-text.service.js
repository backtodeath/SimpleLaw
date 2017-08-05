(function () {
    'use strict';

    angular
        .module('simpleLawApp')
        .factory('ShowText', ShowText);

    ShowText.$inject = ['MESSAGES'];

    function ShowText(MESSAGES) {
        var service = {
            showMessage: showMessage
        };
        var target = '.text-target';
        var messages = MESSAGES;
        var interval = 50;
        var index = 0;

        function showMessage(interval) {
            var message = getNextMessage();
            showText(message, interval, 0);
        }

        function showText(message, index){
            if(index === 0){
                angular.element(document.querySelector(target)).html('');
            }
            if (index < message.length) {
                document.querySelector(target).append(message[index++]);
                setTimeout(function () {
                    showText(message, index);
                }, interval);
            }else {
                setTimeout(function () {
                    showText(getNextMessage(), 0);
                }, 800);

            }
        }

        function getNextMessage() {
            if(index === messages.length){
                index = 0;
            }
            return messages[index++];
        }
        return service;
    }
})();
