(function () {
    'use strict';

    var app = angular.module('app');

    // Collect the routes
    app.constant('routes', getRoutes());
    
    // Configure the routes and route resolvers
    app.config(['$routeProvider', 'routes', routeConfigurator]);
    function routeConfigurator($routeProvider, routes) {

        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });
        $routeProvider.otherwise({ redirectTo: '/' });
    }

    // Define the routes 
    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'app/dashboard/dashboard.html',
                    title: 'dashboard',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Dashboard'
                    }
                }

            }, {
                url: '/event',
                config: {
                    templateUrl: 'app/event/event.html',
                    title: 'event',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-envelope"></i> Event'
                    }
                }
            },{
                url: '/event/:id',
                config: {
                    templateUrl: 'app/event/eventdetail.html',
                    title: 'event detail',
                    settings: {}
                }
            },{
                url: '/calendar',
                config: {
                    templateUrl: 'app/calendar/calendar.html',
                    title: 'calendar',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-calendar"></i> Calendar'
                    }
                }
            }, {
                url: '/admin',
                config: {
                    title: 'admin',
                    templateUrl: 'app/admin/admin.html',
                    settings: {
                        nav: 4,
                        content: '<i class="fa fa-lock"></i> Admin'
                    }
                }
            }
        ];
    }
})();