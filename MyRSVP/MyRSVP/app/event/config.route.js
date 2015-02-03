//(function () {
//    'use strict';

//    angular
//        .module('event')
//        .run(routeConfig);

//    routeConfig.$inject = ['routehelper'];
//    /* @ngInject */
//    function routeConfig(routehelper) {
//        routehelper.configureRoutes(getRoutes());
//    }

//    function getRoutes() {
//        return [
//            //{
//            //    url: '/sessions',
//            //    config: {
//            //        title: 'sessions',
//            //        templateUrl: 'app/session/sessions.html',
//            //        settings: {
//            //            nav: 2,
//            //            content: '<i class="fa fa-calendar"></i> Sessions'
//            //        }
//            //    }
//            //},
//            //{
//            //    url: '/sessions/search/:search',
//            //    config: {
//            //        title: 'sessions-search',
//            //        templateUrl: 'app/session/sessions.html',
//            //        settings: {}
//            //    }
//            //},
//            {
//                url: '/event/:id',
//                config: {
//                    templateUrl: 'app/event/eventdetail.html',
//                    title: 'event detail',
//                    settings: {}
//                }
//            }
//        ];
//    }
//})();