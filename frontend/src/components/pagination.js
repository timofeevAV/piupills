import Link from 'next/link'
import React from 'react'
import { usePagination } from '../hooks/usePagination'

const dotts = '...'

const Pagination = async ({totalItems, currentPage, itemsPerPage}) => {
  const pages = usePagination(totalItems, currentPage, itemsPerPage)

  return (
    <div className="flex items-center justify-center m-5 text-[#d9d9d9] flex-wrap select-none">
      {pages.map((pageNumber, i) =>
        pageNumber === dotts ? (
          <span key={i}
                className="px-4 py-2 text-sm font-semibol">
            {pageNumber}
          </span>
        ) : (
          <Link
            key={i}
            href={`/?page=${pageNumber}&perPage=${itemsPerPage}`}
            className={`${
              pageNumber === currentPage ? 'pointer-events-none text-success-dark border-[#d9d9d9] border' : ''
            } px-4 py-2 mx-1`}>
            {pageNumber}
          </Link>
        )
      )}
    </div>
  )
}

export {Pagination}