﻿(function () { 
    'use strict';
    
    var controllerId = 'topnav';
    angular.module('app').controller(controllerId,
        ['$route', 'config', 'routes', topnav]);

    function topnav($route, config, routes) {
        var vm = this;

        vm.title = "R.S.V.P";

        //activate();

        //function activate() { getNavRoutes(); }
        
        //function getNavRoutes() {
        //    vm.navRoutes = routes.filter(function(r) {
        //        return r.config.settings && r.config.settings.nav;
        //    }).sort(function(r1, r2) {
        //        return r1.config.settings.nav - r2.config.settings.nav;
        //    });
        //}
        
        //function isCurrent(route) {
        //    if (!route.config.title || !$route.current || !$route.current.title) {
        //        return '';
        //    }
        //    var menuName = route.config.title;
        //    return $route.current.title.substr(0, menuName.length) === menuName ? 'current' : '';
        //}
    };
})();
