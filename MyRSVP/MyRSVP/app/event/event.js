(function () {
    'use strict';
    var controllerId = 'event';
    angular.module('app').controller(controllerId, ['common', '$location', event]);

    function event(common, $location) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Event';

        vm.column = "";
        vm.isReverse = false;
        vm.setSort = setSort;
        vm.getSortState = getSortState;
        vm.viewDetail = viewDetail;

        vm.eventList = [{ 
            id: 1,
            desc: "RoadShow Event",
            date: new Date(Date.now()),
            venue: "TimeSquare",
            creator: "YX"
        }, {
            id: 2,
            desc: "RoadShow Event",
            date: new Date(Date.now()),
            venue: "TimeSquare",
            creator: "Khor"
        }];

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Event View'); });
        }

        function setSort(prop) {
            vm.column = prop;
            vm.isReverse = !vm.isReverse;
        }

        function getSortState(prop) {
            if (vm.column == prop) {
                if (vm.isReverse) {
                    return 'fa fa-sort-up';
                }
                else {
                    return 'fa fa-sort-down';
                }
            }
            else {
                return '';
            }
        }

        function viewDetail(event) {
            $location.path('/event/' + event.id);
        }
    }
})();