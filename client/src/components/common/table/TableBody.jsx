import React from "react"
import _ from "lodash"

const TableBody = ({ data, columns }) => {
    const renderContent = (item, column) => {
        if (columns[column].component) {
            const component = columns[column].component
            if (typeof component === "function") {
                return component(item)
            }
            return component
        }
        if (columns[column].path === "amount") {
            return _.get(item, columns[column].path).toLocaleString()
        }
        return _.get(item, columns[column].path)
    }

    return (
        <tbody>
            {data.map((item) => (
                <tr
                    key={item._id}
                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                >
                    {Object.keys(columns).map((column) => (
                        <td key={column} className="whitespace-nowrap p-4 py-2">
                            {renderContent(item, column)}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    )
}

export default TableBody
