import React from "react"
import _ from "lodash"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
    const setPages = (count) => {
        const pages = []
        if (count >= 7) {
            const start = _.range(currentPage, currentPage + 2)
            const end = _.range(count - 1, count + 1)
            if (currentPage >= count - 4) {
                return _.range(count - 4, count + 1)
            } else {
                pages.push(...start, "...", ...end)
            }

            return pages
        } else {
            return _.range(1, count + 1)
        }
    }

    const pageCount = Math.ceil(itemsCount / pageSize)
    const pages = setPages(pageCount)
    const startCountItems = pageSize * (currentPage - 1) + 1
    const endCountItems = pageSize * currentPage > itemsCount ? itemsCount : pageSize * currentPage

    const setActiveClass = (pageNumber) => {
        if (pageNumber === currentPage) {
            return "relative z-10 inline-flex items-center justify-center bg-indigo-600 px-3 py-1 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-10"
        }
        return "relative inline-flex items-center justify-center  px-3 py-1 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 w-10"
    }
    return (
        <>
            {pageCount > 1 && (
                <div className="flex items-center justify-center sm:justify-between px-4 py-3 sm:px-6">
                    <div className="flex flex-col sm:flex-row sm:flex-1 sm:items-center sm:justify-between">
                        <div className="max-sm:mb-2">
                            <p className="text-sm text-gray-700">
                                Показано с <span className="font-medium">{startCountItems}</span> по{" "}
                                <span className="font-medium">{endCountItems}</span> из{" "}
                                <span className="font-medium">{itemsCount}</span> транзакций
                            </p>
                        </div>
                        <div>
                            <nav
                                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                                aria-label="Pagination"
                            >
                                <button className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                    <span className="sr-only">Предыдущий</span>
                                    <ChevronLeftIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                        onClick={() => onPageChange(currentPage === 1 ? currentPage : currentPage - 1)}
                                    />
                                </button>
                                {pages.map((page) => (
                                    <button
                                        key={"page_" + page}
                                        className={setActiveClass(page)}
                                        onClick={() => onPageChange(page)}
                                    >
                                        {page}
                                    </button>
                                ))}
                                <button className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                    <span className="sr-only">Следующий</span>
                                    <ChevronRightIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                        onClick={() =>
                                            onPageChange(currentPage === pageCount ? currentPage : currentPage + 1)
                                        }
                                    />
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Pagination
