export default class ArticleDirective {
    constructor() {
        this.restrict = 'E';
        this.scope = {};
    }

    // Directive compile function
    compile() {

    }

    link(scope, element, attrs, ngModel) {
        scope.model = mapArticle();
        scope.isVisible = false;

        scope.submit = function () {
            scope.saveArticle({newVal: scope.model});
            closeFormClearState(scope);
        };

        scope.cancel = function () {
            closeFormClearState(scope);
        };

        scope.$watch('value', function () {
            if (!scope.value)
                return;

            scope.model = mapArticle(scope.value);
            scope.isVisible = true;
        });

        model.deleteItem = function (article) {
            deleteArticle(article);
        };
    }
}