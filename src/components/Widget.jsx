import React from "react"
import Title from "./common/widget/Title"
import Body from "./common/widget/Body"

const Widget = ({ type }) => {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <Title />
                    <Body type={type} />
                </div>
            </div>
        </>
    )
}

export default Widget
