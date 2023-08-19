import React from "react"

const Table = () => {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Наименование</th>
                    <th scope="col">Сумма</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Операционный</td>
                    <td>1 000 000</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Инвестиции</td>
                    <td>500 000</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Кредиты</td>
                    <td>200 000</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table
