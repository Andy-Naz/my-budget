import React from "react"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline"

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({ ...selectedSort, order: selectedSort.order === "asc" ? "desc" : "asc" })
        } else {
            onSort({ path: item, order: "asc" })
        }
    }

    const renderSortDirectionArrow = (item) => {
        if (selectedSort.path === item) {
            return selectedSort.order === "asc" ? <ChevronUpIcon /> : <ChevronDownIcon />
        }
        return ""
    }

    return (
        <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={columns[column].path ? () => handleSort(columns[column].path) : undefined}
                        {...{ role: columns[column].path && "button" }}
                        scope="col"
                        className="px-6 py-4"
                    >
                        <div className="flex">
                            <span>{columns[column].name}</span>
                            <span className="flex w-4">{renderSortDirectionArrow(columns[column].path)}</span>
                        </div>
                    </th>
                ))}
            </tr>
        </thead>
    )
}

export default TableHeader
