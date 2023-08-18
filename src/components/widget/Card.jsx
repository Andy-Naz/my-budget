import React from "react"
import Title from "./Title"
import Body from "./Body"

const WidgetCard = () => {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <Title />
                    <Body/>
                </div>
            </div>
        </>
    )
}

export default WidgetCard
