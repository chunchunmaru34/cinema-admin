interface Sortable {
  sortingOrder: object;
  defaultSortingOrder: object;

  sort(parameterName: string);
}
