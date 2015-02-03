(function () {
    'use strict';
    var controllerId = 'calendar';
    angular.module('app').controller(controllerId, ['common', calendar]);

    function calendar(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Calendar';

        vm.calendarList = [];

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Calendar View'); });
        }
    }
})();