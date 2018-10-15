define( 'dashboard',function () {
    
    function dashboard() {
        dashboardController.$inject = ['$rootScope', 'qlikService'];
        function dashboardController($rootScope,qlikService) {
            var vm = this;
            vm.changeSel = changeSel;
            vm.toggleOpen = toggleOpen;
            var dateId = 'KmdYJg'
            var provTypeId = 'Cmhyjzp'
            var chart1Id = 'VTthkJx'
            var chart2Id = 'PFDXUK'
            var chart3Id = 'ZSaDtKH'
            var chart4Id = 'ChgJQm'
            var chart5Id = 'dKHwpR'
            var chart6Id = 'gbDnJa'

            var apps;

            $rootScope.$on('apps-loaded',function(a){
                apps = qlikService.getApps();
                init();
            })
            
           
            function init() {
                apps[0].clearAll().then(function(a){
                    apps[0].getObject('dateFilter', dateId);
                    apps[0].getObject('provTypeFilter', provTypeId);
                    apps[0].getObject('chart1', chart1Id); //{noInteraction: true}
                    apps[0].getObject('chart2', chart2Id);
                    apps[0].getObject('chart3', chart3Id);
                    apps[0].getObject('chart4', chart4Id);
                    apps[0].getObject('CurrentSelections', 'CurrentSelections')
               
            })
        
                apps[1].clearAll().then(function(a){
                    apps[1].getObject('chart5', chart5Id);
                    apps[1].getObject('chart6', chart6Id);
            })
                // init create list
                apps[0].createList({
                    "qDef": {"qFieldDefs": ["Appt Date Calendar Month Year"]},
                        "qInitialDataFetch": [{
                            qTop : 0,
                            qLeft : 0,
                            qHeight : 100,
                            qWidth : 1
                        }]
                    },parseDateList)

                    // init create list
                    apps[0].createList({
                    "qDef": {"qFieldDefs": ["Provider Type"]},
                        "qInitialDataFetch": [{
                            qTop : 0,
                            qLeft : 0,
                            qHeight : 100,
                            qWidth : 1
                        }]
                    },parseTypeList)

                    // init create list
                    apps[0].createList({
                    "qDef": {"qFieldDefs": ["Clinical Department"]},
                        "qInitialDataFetch": [{
                            qTop : 0,
                            qLeft : 0,
                            qHeight : 100,
                            qWidth : 1
                        }]
                    },parseClinDepList)

                    // init create list
                    apps[0].createList({
                        "qDef": {"qFieldDefs": ["Clinical Division"]},
                            "qInitialDataFetch": [{
                                qTop : 0,
                                qLeft : 0,
                                qHeight : 100,
                                qWidth : 1
                            }]
                        },parseDivList)

                    // init create list
                    apps[0].createList({
                        "qDef": {"qFieldDefs": ["Department"]},
                            "qInitialDataFetch": [{
                                qTop : 0,
                                qLeft : 0,
                                qHeight : 500,
                                qWidth : 1
                            }]
                        },parseDepList)
        }

        function changeSel(field, val){
            // console.log(val)
            var sel;
            if(field=='Appt Date Calendar Month Year'){
                sel = val.num
            }else{
                sel = val.name
            }
            // console.log(val)
            apps[0].field(field).selectValues([sel], true, true);
            apps[1].field(field).selectValues([sel], true, true);
        }
       
        function toggleOpen(div){
            $('.'+div).toggle();
        }
            
        function parseTypeList(sel){
           
            var list = sel.qListObject.qDataPages[0].qMatrix;
            var typeOptions = []
            // console.log(list)
            list.forEach(function(opt){
                // console.log(opt)
                typeOptions.push({name:opt[0].qText, state: opt[0].qState})
            })
            vm.typeOptions = typeOptions
        }

        function parseDateList(sel){
            // console.log(sel)
           
            var list = sel.qListObject.qDataPages[0].qMatrix;
            var dateOptions = []
            // console.log(list)
            list.forEach(function(opt){
                // console.log(opt)
                dateOptions.push({name:opt[0].qText, num: opt[0].qNum, state: opt[0].qState})
            })
            vm.dateOptions = dateOptions
        }

        function parseClinDepList(sel){
            // console.log(sel)
           
            var list = sel.qListObject.qDataPages[0].qMatrix;
            var clinDepOptions = []
            // console.log(list)
            list.forEach(function(opt){
                // console.log(opt)
                clinDepOptions.push({name:opt[0].qText, num: opt[0].qNum, state: opt[0].qState})
            })
            vm.clinDepOptions = clinDepOptions
        }

        function parseDivList(sel){
            // console.log(sel)
           
            var list = sel.qListObject.qDataPages[0].qMatrix;
            var divOptions = []
            // console.log(list)
            list.forEach(function(opt){
                // console.log(opt)
                divOptions.push({name:opt[0].qText, num: opt[0].qNum, state: opt[0].qState})
            })
            vm.divOptions = divOptions
        }

        function parseDepList(sel){
            // console.log(sel)
           
            var list = sel.qListObject.qDataPages[0].qMatrix;
            var depOptions = []
            // console.log(list)
            list.forEach(function(opt){
                // console.log(opt)
                depOptions.push({name:opt[0].qText, num: opt[0].qNum, state: opt[0].qState})
            })
            // console.log(depOptions.length)
            vm.depOptions = depOptions
        }

        $("#ClearAll").click(function() {

            apps[0].clearAll();
            apps[1].clearAll();
            
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