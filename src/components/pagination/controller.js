export default class ListPaginationCtrl {

    constructor($scope) {
        "ngInject";
        this._$scope = $scope;
    };

    pageRange(total) {
        const pages = [];

        for (let i = 0; i < total; i++) {
            pages.push(i + 1)
        }

        return pages;
    };

    changePage(number) {
        this._$scope.$emit("setPageTo", number);
    };

};