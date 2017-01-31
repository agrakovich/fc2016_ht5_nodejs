export default class PaginationController {
    constructor($scope, Item){
        'ngInject';
        this.itemsPerPage = 5;
        this.currentPage = 0;
        this.Item = Item;
        this.$scope = $scope;
        this.$scope.$watch("currentPage", this.currentPageChanged());
    }

    currentPageChanged (newValue, oldValue) {
        this.pagedItems = this.Item.get(newValue * this.itemsPerPage, this.itemsPerPage);
        this.total = this.Item.total();
    }

    prevPage() {
        if (this.currentPage > 0) {
            this.currentPage--;
        }
    };

    prevPageDisabled() {
        return this.currentPage === 0 ? "disabled" : "";
    };

    nextPage() {
        if (this.currentPage < this.pageCount() - 1) {
            this.currentPage++;
        }
    };

    nextPageDisabled() {
        return this.currentPage === this.pageCount() - 1 ? "disabled" : "";
    };

    pageCount() {
        return Math.ceil(this.total/this.itemsPerPage);
    };
}