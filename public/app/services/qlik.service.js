define('qlikService', function () {

    qlikService.$inject = ['$rootScope']
    function qlikService($rootScope) {

        var service = this;
        var app1;
        var app2;
        var aQlik;
        var aConfig;
        service.setQlik = setQlik
        service.getApp = getApp
        service.openApp = openApp;
        service.openApps = openApps;
        service.getApps = getApps;

        
        function openApp(qlik, appId, config) {
            this.app = qlik.openApp(appId, config)
            this.config = config;
            this.qlik = qlik;
        }

        function openApps(qlik, appId_1, appId_2, config) {
            app1 = qlik.openApp(appId_1, config)
            app1.model.waitForOpen.promise.then(function(a){
                app2 = qlik.openApp(appId_2,config);
                app2.model.waitForOpen.promise.then(function(a){
                    $rootScope.$broadcast('apps-loaded')
                })
            })
            aConfig = config;
            aQlik = qlik;
        }

        function getApps(){
            return [app1,app2]
        }
        function setQlik(qlikJS) {
            this.qlik = qlikJS;
        }

        function getApp() {
            return this.app;
        }
    }
    return qlikService;
})