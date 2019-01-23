define( 'loadingModal',function () {
    
    function loadingModalComponent() {
        loadingModalComponentController.$inject = ['$rootScope', 'qlikService'];
        function loadingModalComponentController($rootScope, qlikService) {
            var vm = this;
            vm.showModal = true;
            init();
           
            $rootScope.$on('apps-loaded',function(a){
                vm.showModal = false;
            })

            function init() {
            }
        }
        return {
            bindings: {},
            controller: loadingModalComponentController,
            controllerAs: 'cf',
            templateUrl: 'app/components/loadingModal/loadingModal.component.html'
        }
    }

    return loadingModalComponent();
});