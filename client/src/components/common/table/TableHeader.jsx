import React from "react"

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
            return selectedSort.order === "asc" ? "bi bi-caret-up-fill" : "bi bi-caret-down-fill"
        }
        return ""
    }

    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={columns[column].path ? () => handleSort(columns[column].path) : undefined}
                        {...{ role: columns[column].path && "button" }}
                        scope="col"
                    >
                        {columns[column].name}
                        <i className={renderSortDirectionArrow(columns[column].path)}></i>
                    </th>
                ))}
            </tr>
        </thead>
    )
}

export default TableHeader
