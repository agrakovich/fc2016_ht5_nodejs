const AppConfig = ($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider) => {
    'ngInject';
    
    $stateProvider.state('app', {
        //url: '/articles',
        abstract: true,
        template: '<ui-view/>'
    });

    $urlRouterProvider.otherwise('/');
};

export default AppConfig;