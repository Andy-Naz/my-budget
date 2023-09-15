import React from "react"
import Title from "../common/widget/Title"
import Body from "../common/widget/Body"
import BottomLine from "../common/widget/BottomLine"

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
    const subTotal = newData.reduce((acc, data) => {
        return (acc += data.value)
    }, 0)
    
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <Title title={title} />
                    <Body data={newData} />
                    <BottomLine total={subTotal} />
                </div>
            </div>
        </>
    )
}

export default Widget
