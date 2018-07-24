define( 'dashboard',function () {
    
    function dashboard() {
        dashboardController.$inject = ['qlikService'];
        function dashboardController(qlikService) {
            var vm = this;
            // let dateId = 'USbknpk'
            // let provTypeId = 'JPVzh'
            let dateId = 'KmdYJg'
            let provTypeId = 'Cmhyjzp'
            // let chart1Id = 'yxBrMU'
            let chart1Id = 'VTthkJx'
            // let chart2Id = 'mdHsFsP'
            let chart2Id = 'PFDXUK'
            // let chart3Id = 'CBEb'
            let chart3Id = 'ZSaDtKH'
            // let chart4Id = 'bQnkv'
            let chart4Id = 'ChgJQm'
           
            init();
           
            function init() {
                aQlikApp.getObject('dateFilter', dateId);
                aQlikApp.getObject('provTypeFilter', provTypeId);
                // aQlikApp.getObject('clinDepFilter', clinDepId);
                // aQlikApp.getObject('clinDivFilter', clinDivId);
                // aQlikApp.getObject('departmentFilter', departmentId);
                // aQlikApp.getObject('provFilter', provId);
                aQlikApp.getObject('chart1', chart1Id);
                // aQlikApp.getObject('kpi1', kpi1Id);
                aQlikApp.getObject('chart2', chart2Id);
                // aQlikApp.getObject('kpi2', kpi2Id);
                aQlikApp.getObject('chart3', chart3Id);
                // aQlikApp.getObject('kpi3', kpi3Id);
                aQlikApp.getObject('chart4', chart4Id);
                // aQlikApp.getObject('kpi4', kpi4Id);
                aQlikApp.getObject('currentSelections', 'currentSelections')
               
            }
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