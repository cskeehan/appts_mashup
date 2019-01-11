define( 'dashboard',function () {
    
    function dashboard() {
        dashboardController.$inject = ['$rootScope', 'qlikService'];
        function dashboardController($rootScope,qlikService) {
            var vm = this;
            vm.toggleOpen = toggleOpen;
            var kpi1Id = 'fMZmZ' // Executive Scorecard
            var kpi2Id = 'DJBGDS' // Patient Flow
            var kpi3Id = 'naJDmkX' // Patient Flow
            var kpi4Id = 'pPqm' // Patient Flow
            var kpi5Id = 'CUpPgWM' // Patient Flow
            var kpi6Id = 'tAmQP' // ED
            var kpi7Id = 'pSeGreZ' // Executive Scorecard
            var kpi8Id = 'qLutEJ' // Executive Scorecard
            var kpi9Id = 'tYmFdX' // Periop
            var kpi10Id = 'GLhYvPP' // Observations
            var kpi11Id = 'ceNpgS' // Executive Scorecard
            var kpi12Id = 'XeECfa' // Observations
            var kpi13Id = 'mwxhcb' // Appointments
            var kpi14Id = 'FXTVw' // Referrals

            var apps;

            $rootScope.$on('apps-loaded',function(a){
                apps = qlikService.getApps();
                init();
            })
            
           
            function init() {
                apps[0].clearAll().then(function(a){
                    apps[0].getObject('kpi1', kpi1Id); //, {noInteraction: true});
                    apps[0].getObject('kpi7', kpi7Id);
                    apps[0].getObject('kpi8', kpi8Id);
                    apps[0].getObject('kpi11', kpi11Id);
                    //apps[0].getObject('CurrentSelections', 'CurrentSelections')
            })
                apps[1].clearAll().then(function(a){
                    apps[1].getObject('kpi2', kpi2Id);
                    apps[1].getObject('kpi3', kpi3Id);
                    apps[1].getObject('kpi4', kpi4Id);
                    apps[1].getObject('kpi5', kpi5Id);
            })
                apps[2].clearAll().then(function(a){
                    apps[2].getObject('kpi6', kpi6Id);
            })
                apps[3].clearAll().then(function(a){
                    apps[3].getObject('kpi9', kpi9Id);
            })
                apps[4].clearAll().then(function(a){
                    apps[4].getObject('kpi10', kpi10Id);
                    apps[4].getObject('kpi12', kpi12Id);
            })
                apps[5].clearAll().then(function(a){
                    apps[5].getObject('kpi13', kpi13Id);
            })
                apps[6].clearAll().then(function(a){
                    apps[6].getObject('kpi14', kpi14Id);
            })         
        }
       
        function toggleOpen(div){
            $('.'+div).toggle();
        }

        $("#ClearAll").click(function() {

            apps[0].clearAll();
            apps[1].clearAll();
            apps[2].clearAll();
            
                  });

    }
    return {
        bindings: {},
        controller: dashboardController,
        controllerAs: 'cf',
        templateUrl: 'app/components/dashboard/dashboard.component.html'
    }
}
    return dashboard();
});