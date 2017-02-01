import angular from "angular";
import ArticlesService from "./articleService";

const servicesModule = angular.module("app.services", []);

servicesModule.service("Articles", ArticlesService);

export default servicesModule;