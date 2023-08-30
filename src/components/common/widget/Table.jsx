import React from "react"

const Table = ({ data }) => {
    console.log(data)
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Наименование</th>
                    <th scope="col" className="d-flex justify-content-end">
                        Сумма
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={item._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.name}</td>
                        <td className="d-flex justify-content-end">{item.value.toLocaleString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table
