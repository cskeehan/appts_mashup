define( 'dashboard',function () {
    
    function dashboard() {
        dashboardController.$inject = ['qlikService'];
        function dashboardController(qlikService) {
            var vm = this;
            let dateId = 'USbknpk'
            let provTypeId = 'JPVzh'
            // let dateId = 'cFxPpFQ'
            // let clinDepId = '35ffec88-a936-4c88-9918-10810e1cbf4b'
            // let clinDivId = 'd1b7308c-5a02-4992-b10a-91f0cd63e5ce'
            // let departmentId = '73a09982-99e3-4fc4-87e1-ec0f432b3f40'
            // let provId = 'de6e150c-4f42-419c-af7a-28ff48a2c3e8'
            let chart1Id = 'yxBrMU'
            // let chart1Id = 'eaa05c41-c9ea-4cb8-a1b1-f5ab522ca7b1'
            // let kpi1Id = 'UANF'
            let chart2Id = 'mdHsFsP'
            // let chart2Id = 'Zjcu'
            // let kpi2Id = 'yzjc'
            let chart3Id = 'CBEb'
            // let chart3Id = 'QWhJM'
            // let kpi3Id = 'MFqAHw'
            let chart4Id = 'bQnkv'
            // let chart4Id = 'SuKwXk'
            // let kpi4Id = 'UJBQpa'
           
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