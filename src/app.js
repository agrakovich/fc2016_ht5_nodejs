import angular from 'angular';
import appRun from './app.run';
import 'angular-ui-router';
import './components/editor'
import './components/article-list'
import './services'

const requires = [
    'ui.router',
    'app.articles',
    'app.services',
    'app.editor'
];

window.app = angular.module('app', requires);

angular.module('app').run(appRun);

angular.bootstrap(document, ['app'], {
    strictDi: true
});