import angular from "angular";
import ArticleListConfig from "./config";
import ArticleListCtrl from "./controller";

const articleListModule = angular.module("app.articles", []);

articleListModule.config(ArticleListConfig);
articleListModule.controller("ArticleListCtrl", ArticleListCtrl);

export default articleListModule;