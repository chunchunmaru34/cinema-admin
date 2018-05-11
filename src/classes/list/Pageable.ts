interface Pageable {
  totalItems: number;
  itemsLimit: number;
  pages: number;
  page: number;

  resetPage();
  handlePageChange(pageInfo: object);
}
