require.config({
    baseUrl: "https://qliktest.jefferson.edu/adfst/resources",
    // baseUrl: "https://qlik.jefferson.edu/adfsp/resources",
    // baseUrl: "https://qlikstage.jefferson.edu/adfss/resources",
    paths: {
        "angularRoute": "https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/1.0.18/angular-ui-router.min"
    }
});
var aQlikApp;
var aQlik;
// loading qlikJS
require(["js/qlik"], function (qlik) {
    // creating the angular app and bootstrapping
    require(["angular", 'angularRoute', "routes", 'qlikService','navBar','footer', 'dashboard'],
        function (angular, uiRoute, routes, qlikService, navBar, footer, dashboard) {
            let config = {
                host: 'qliktest.jefferson.edu',
                prefix: '/adfst/',
                // host: 'qlik.jefferson.edu',
                // prefix: '/adfsp/',
                // host: 'qlikstage.jefferson.edu',
                // prefix: '/adfss/',
                port: '443',
                isSecure: true
            };
            let app = angular.module('mashup-app', ['ui.router']);
            app.config(routes);
            app.component('navBar', navBar);
            app.component('footerComponent', footer);
            app.component('dashboardComponent', dashboard);
            app.service('qlikService', qlikService);
            angular.bootstrap(document, ["qlik-angular", "mashup-app"]);
            aQlik = qlik;
            // aQlikApp = qlik.openApp('937ded89-6791-44d5-80f1-fa60f9956e5d', config); // PROD
            aQlikApp = qlik.openApp('bf83b112-8b60-4d91-8ea3-c6daa1ef18bf', config); // UAT
            aQlikApp.getObject('CurrentSelections', 'CurrentSelections')
        }
    )
});