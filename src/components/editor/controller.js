class EditorCtrl {

    constructor(ArticleService, article, $state) {
        "ngInject";

        this._ArticleService = ArticleService;
        this._$state = $state;

        if (!article) {
            this.article = {
                title: "",
                author: "",
                text: ""
            };
        } else {
            this.article = article;
        }
    };

    submit() {
        this.isSubmitting = true;

        this._ArticleService.save(this.article)
            .then(newArticle => this._$state.go("app.article", {slug: newArticle.slug}))
            .catch(err => {
                this.isSubmitting = false;
                this.errors = err.data.errors;
            });
    };

};

export default EditorCtrl;