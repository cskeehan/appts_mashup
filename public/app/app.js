require.config({
    // baseUrl: "https://qliktest.jefferson.edu/adfst/resources",
    baseUrl: "https://qlik.jefferson.edu/adfsp/resources",
    // baseUrl: "https://qlikstage.jefferson.edu/adfss/resources",
    paths: {
        "angularRoute": "https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/1.0.18/angular-ui-router.min"
    }
});
var aQlikApp;
var aQlikApp2;
var aQlik;
// loading qlikJS
require(["js/qlik"], function (qlik) {
    // creating the angular app and bootstrapping
    require(["angular", 'angularRoute', "routes", 'qlikService','navBar','footer', 'dashboard', 'loadingModal'],
        function (angular, uiRoute, routes, qlikService, navBar, footer, dashboard, loadingModal) {
            let config = {
                // host: 'qliktest.jefferson.edu',
                // prefix: '/adfst/',
                host: 'qlik.jefferson.edu',
                prefix: '/adfsp/',
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
            app.component('loadingModal', loadingModal);
            app.service('qlikService', qlikService);
            app.run(['qlikService','$http',function(qlikService,$http){
                qlikService.openApps(qlik,'a3a03faa-3c7c-4f01-974e-9e9f7183a663', 'b4d84dfa-94b7-4865-a9d2-9a0a79a4fbea',
                '6e4ccba4-12f2-44d7-9d1b-070f39fddebe', 'e0fb5a5a-233a-432a-849f-24c8a8e31353', 'fb1ffe11-e398-41c5-9306-168139f238e9',
                '937ded89-6791-44d5-80f1-fa60f9956e5d', 'abfdf8ed-3078-40dd-9f3e-209e38dbd28e', config)
            
            }]);
            angular.bootstrap(document, ["qlik-angular", "mashup-app"]);
            
        }
    )
});