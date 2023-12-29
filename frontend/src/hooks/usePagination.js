const dots = '...';

const getPages = (length, inc = 1) =>
  Array.from({ length }, (_, i) => i + inc)

export const usePagination = (totalItems, currentPage, itemsPerPage) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  if (totalPages <= 5) {
    return getPages(totalPages)
  }
  if (currentPage <= 3) {
    return [1, 2, 3, 4, dots, totalPages]
  }
  if (currentPage < totalPages - 2) {
    return [
      1,
      dots,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      dots,
      totalPages,
    ]
  }
  return [1, dots, ...getPages(4, totalPages - 3)]
}