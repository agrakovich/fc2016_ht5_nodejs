import angular from "angular";
import EditorConfig from "./config";
import EditorCtrl from "./controller";

const editorModule = angular.module("app.editor", []);

editorModule.config(EditorConfig);
editorModule.controller("EditorCtrl", EditorCtrl);

export default editorModule;