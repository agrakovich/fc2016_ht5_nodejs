import angular from 'angular';
import appRun from './app.run';
import appConfig from './app.config';
import 'angular-ui-router';
import './components/editor'
import './components/article-list'
import './services'

const requires = [
    'ui.router',
    'app.article',
    'app.services',
    'app.editor'
];

window.app = angular.module('app', requires);

angular.module('app').config(appConfig);
angular.module('app').run(appRun);

angular.bootstrap(document, ['app'], {
    strictDi: true
});