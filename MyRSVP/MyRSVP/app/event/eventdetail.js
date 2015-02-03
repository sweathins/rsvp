(function () {
    'use strict';
    var controllerId = 'eventdetail';
    angular.module('app').controller(controllerId, ['common', eventdetail]);

    function eventdetail(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Event Detail';

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Event Detail View'); });
        }

    }
})();