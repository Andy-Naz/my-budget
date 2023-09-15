import React from "react"

const BottomLine = ({ total }) => {
    return (
        <div className="d-flex justify-content-between"><p>Итого</p>
        <p> {total.toLocaleString()}</p></div>
            
    )
}

export default BottomLine
