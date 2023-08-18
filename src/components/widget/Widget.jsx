import React from "react"
import Title from "./Title"
import Body from "./Body"

const Widget = ({type}) => {
    console.log(type)
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
