export default class ArticleListCtrl {

    constructor(ArticleService, $scope) {
        "ngInject";

        this._ArticleService = ArticleService;
        this.setListTo(this.listConfig);

        $scope.$on("setPageTo", (ev, pageNumber) => this.setPageTo(pageNumber));
        $scope.$on("setListTo", (ev, newList) => this.setListTo(newList));
    };

    setListTo(newList) {
        this.articles = [];
        this.listConfig = newList;
        this.runQuery();
    };

    setPageTo(pageNumber) {
        this.listConfig.currentPage = pageNumber;
        this.runQuery();
    };

    runQuery() {
        this.loading = true;

        const queryConfig = {
            type: this.listConfig.type,
            filters: this.listConfig.filters || {}
        };

        if (!this.listConfig.currentPage) this.listConfig.currentPage = 1;

        queryConfig.filters.offset = (this.limit * (this.listConfig.currentPage - 1));
        queryConfig.filters.limit = this.limit;

        this._ArticleService.query(queryConfig)
            .then(res => {
                this.loading = false;
                this.articles = res.articles;
                this.listConfig.totalPages = Math.ceil(res.articlesCount / this.limit);
            });
    };

};