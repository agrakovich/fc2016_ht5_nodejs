const EditorConfig = $stateProvider => {

    "ngInject";

    $stateProvider.state("app.article", {
        url: "/editor",
        controller: "EditorCtrl",
        controllerAs: "$ctrl",
        templateUrl: "editor/template.html",
        title: "Editor",
        resolve: {
            article: (ArticleService, $state, $stateParams) => {
                if($stateParams.slug) {
                    return ArticleService.get($stateParams.slug)
                        .then(article => {
                            return article;
                        }).catch(err => $state.go("app.notFound"));
                } else {
                    return null;
                }
            }
        }
    });

};

export default EditorConfig;