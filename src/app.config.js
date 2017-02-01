const AppConfig = ($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise("/");
};

export default AppConfig;