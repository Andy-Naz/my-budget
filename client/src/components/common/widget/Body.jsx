import React from "react"

const Body = ({ data }) => {
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
                        <td scope="row">{index + 1}</td>
                        <td>{item.name}</td>
                        <td className="d-flex justify-content-end">{item.value.toLocaleString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Body
