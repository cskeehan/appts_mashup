define('routes',function(){
    
    function routeConfig($locationProvider, $stateProvider, $urlRouterProvider){
       
        $stateProvider
        .state('dashboard', {
          url: '/dashboard',
          template: '<dashboard-component></dashboard-component>',
        })
        $urlRouterProvider.otherwise('/dashboard');
    }
    routeConfig.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
    return routeConfig;

})