import React from "react"
import Table from "./Table"
import Diagram from "./Diagram"

const Body = ({ type, data }) => {
    if (type === "card") {
        return <Table data={data}/>
    }
    return <Diagram />
}

export default Body
