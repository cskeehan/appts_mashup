define( 'dashboard',function () {
    
    function dashboard() {
        dashboardController.$inject = [];
        function dashboardController() {
            var vm = this;
            vm.changeSel = changeSel;
            vm.toggleOpen = toggleOpen;
            let dateId = 'KmdYJg'
            let provTypeId = 'Cmhyjzp'
            let chart1Id = 'VTthkJx'
            let chart2Id = 'PFDXUK'
            let chart3Id = 'ZSaDtKH'
            let chart4Id = 'ChgJQm'
            let chart5Id = 'dKHwpR'
            let chart6Id = 'gbDnJa'

            init();
           
            function init() {
                aQlikApp.clearAll().then(function(a){
                    aQlikApp.getObject('dateFilter', dateId);
                    aQlikApp.getObject('provTypeFilter', provTypeId);
                    aQlikApp.getObject('chart1', chart1Id); //{noInteraction: true}
                    aQlikApp.getObject('chart2', chart2Id);
                    aQlikApp.getObject('chart3', chart3Id);
                    aQlikApp.getObject('chart4', chart4Id);
                    aQlikApp.getObject('currentSelections', 'currentSelections')
               
            })
        
                aQlikApp2.clearAll().then(function(a){
                    aQlikApp2.getObject('chart5', chart5Id);
                    aQlikApp2.getObject('chart6', chart6Id);
            })
                // init create list
                aQlikApp.createList({
                    "qDef": {"qFieldDefs": ["Appt Date Calendar Month Year"]},
                        "qInitialDataFetch": [{
                            qTop : 0,
                            qLeft : 0,
                            qHeight : 100,
                            qWidth : 1
                        }]
                    },parseDateList)

                    // init create list
                    aQlikApp.createList({
                    "qDef": {"qFieldDefs": ["Provider Type"]},
                        "qInitialDataFetch": [{
                            qTop : 0,
                            qLeft : 0,
                            qHeight : 100,
                            qWidth : 1
                        }]
                    },parseTypeList)

                    // init create list
                    aQlikApp.createList({
                    "qDef": {"qFieldDefs": ["Clinical Department"]},
                        "qInitialDataFetch": [{
                            qTop : 0,
                            qLeft : 0,
                            qHeight : 100,
                            qWidth : 1
                        }]
                    },parseClinDepList)

                    // init create list
                    aQlikApp.createList({
                        "qDef": {"qFieldDefs": ["Clinical Division"]},
                            "qInitialDataFetch": [{
                                qTop : 0,
                                qLeft : 0,
                                qHeight : 100,
                                qWidth : 1
                            }]
                        },parseDivList)

                    // init create list
                    aQlikApp.createList({
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
            let sel;
            if(field=='Appt Date Calendar Month Year'){
                sel = val.num
            }else{
                sel = val.name
            }
            // console.log(val)
            aQlikApp.field(field).selectValues([sel], true, true);
            aQlikApp2.field(field).selectValues([sel], true, true);
        }
       
        function toggleOpen(div){
            $('.'+div).toggle();
        }
            
        function parseTypeList(sel){
           
            let list = sel.qListObject.qDataPages[0].qMatrix;
            let typeOptions = []
            // console.log(list)
            list.forEach(function(opt){
                // console.log(opt)
                typeOptions.push({name:opt[0].qText, state: opt[0].qState})
            })
            vm.typeOptions = typeOptions
        }

        function parseDateList(sel){
            // console.log(sel)
           
            let list = sel.qListObject.qDataPages[0].qMatrix;
            let dateOptions = []
            // console.log(list)
            list.forEach(function(opt){
                // console.log(opt)
                dateOptions.push({name:opt[0].qText, num: opt[0].qNum, state: opt[0].qState})
            })
            vm.dateOptions = dateOptions
        }

        function parseClinDepList(sel){
            // console.log(sel)
           
            let list = sel.qListObject.qDataPages[0].qMatrix;
            let clinDepOptions = []
            // console.log(list)
            list.forEach(function(opt){
                // console.log(opt)
                clinDepOptions.push({name:opt[0].qText, num: opt[0].qNum, state: opt[0].qState})
            })
            vm.clinDepOptions = clinDepOptions
        }

        function parseDivList(sel){
            // console.log(sel)
           
            let list = sel.qListObject.qDataPages[0].qMatrix;
            let divOptions = []
            // console.log(list)
            list.forEach(function(opt){
                // console.log(opt)
                divOptions.push({name:opt[0].qText, num: opt[0].qNum, state: opt[0].qState})
            })
            vm.divOptions = divOptions
        }

        function parseDepList(sel){
            // console.log(sel)
           
            let list = sel.qListObject.qDataPages[0].qMatrix;
            let depOptions = []
            // console.log(list)
            list.forEach(function(opt){
                // console.log(opt)
                depOptions.push({name:opt[0].qText, num: opt[0].qNum, state: opt[0].qState})
            })
            // console.log(depOptions.length)
            vm.depOptions = depOptions
        }

        $("#ClearAll").click(function() {

            aQlikApp.clearAll();
            aQlikApp2.clearAll();
            
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