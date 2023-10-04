import React from "react"
import TableHeader from "./TableHeader"
import TableBody from "./TableBody"

const Table = ({ onSort, selectedSort, columns, data, children }) => {
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                            {children || (
                                <>
                                    <TableHeader {...{ onSort, selectedSort, columns }} />
                                    <TableBody {...{ data, columns }} />
                                </>
                            )}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table
