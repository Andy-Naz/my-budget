import React from "react"
import Table from "./Table"
import Diagram from "./Diagram"

const Body = ({ type }) => {
    if (type === "card") {
        return <Table />
    }
    return <Diagram />
}

export default Body
