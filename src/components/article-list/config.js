const ArticleConfig = $stateProvider => {

    "ngInject";

    $stateProvider.state("app.article", {
        url: "/",
        controller: "ArticleListCtrl",
        controllerAs: "$ctrl",
        templateUrl: "./template.html",
        title: "Article",
        resolve: {
            article: (ArticleService, $state, $stateParams) => {
                return ArticleService.query()
                    .then(articles => {
                        return articles;
                    }).catch(err => $state.go("app.notFound"));
            }
        }
    });

};

export default ArticleConfig;