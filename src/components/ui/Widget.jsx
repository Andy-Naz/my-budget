import React from "react"
import Title from "../common/widget/Title"
import Body from "../common/widget/Body"

const Widget = ({ type, title, data }) => {
    function transformData(data, title) {
        let newData = []
        if (title === "Доходы") {
            data.map((item) => {
                newData.push({ ...item, value: item.income })
            })
        } else if (title === "Расходы") {
            data.map((item) => {
                newData.push({ ...item, value: item.cost })
            })
        } else {
            data.map((item) => {
                newData.push({ ...item, value: item.total })
            })
        }
        return newData
    }

    const newData = transformData(data, title)

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <Title title={title} />
                    <Body type={type} data={newData} />
                </div>
            </div>
        </>
    )
}

export default Widget
