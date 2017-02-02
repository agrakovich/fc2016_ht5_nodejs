import angular from 'angular';
import ArticleListConfig from './config';
import ArticleListCtrl from './controller';
import ListPagination from '../pagination';

const articleListModule = angular.module('app.article', []);

articleListModule.config(ArticleListConfig);
articleListModule.controller('ArticleListCtrl', ArticleListCtrl);
articleListModule.component('listPagination', ListPagination);

export default articleListModule;