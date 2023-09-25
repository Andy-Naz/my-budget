import React from "react"
import _ from "lodash"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
    const pageCount = Math.ceil(itemsCount / pageSize)
    const pages = _.range(1, pageCount + 1)
    const startCountItems = pageSize * (currentPage - 1) + 1
    const endCountItems = pageSize * currentPage > itemsCount ? itemsCount : pageSize * currentPage

    const setActiveClass = (pageNumber) => {
        if (pageNumber === currentPage) {
            return "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        }
        return "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
    }
    return (
        <>
            {pageCount > 1 && (
                <div className="flex items-center justify-between px-4 py-3 sm:px-6">
                    <div className="flex flex-1 justify-between sm:hidden">
                        <button
                            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                            onClick={() => onPageChange(currentPage === 1 ? currentPage : currentPage - 1)}
                        >
                            Предыдущий
                        </button>
                        <button
                            href="#"
                            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                            onClick={() => onPageChange(currentPage === pages.length ? currentPage : currentPage + 1)}
                        >
                            Следующий
                        </button>
                    </div>
                    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                        <div>
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
                                <a
                                    href="#"
                                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                >
                                    <span className="sr-only">Предыдущий</span>
                                    <ChevronLeftIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                        onClick={() => onPageChange(currentPage === 1 ? currentPage : currentPage - 1)}
                                    />
                                </a>
                                {pages.map((page) => (
                                    <a
                                        key={"page_" + page}
                                        className={setActiveClass(page)}
                                        onClick={() => onPageChange(page)}
                                    >
                                        {page}
                                    </a>
                                ))}
                                <a
                                    href="#"
                                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                >
                                    <span className="sr-only">Следующий</span>
                                    <ChevronRightIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                        onClick={() =>
                                            onPageChange(currentPage === pages.length ? currentPage : currentPage + 1)
                                        }
                                    />
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Pagination
