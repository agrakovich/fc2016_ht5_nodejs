import ListPaginationCtrl from './controller'
const ListPagination = {
    bindings: {
        totalPages: '=',
        currentPage: '='
    },
    controller: ListPaginationCtrl,
    templateUrl: './template.html'
};

export default ListPagination;