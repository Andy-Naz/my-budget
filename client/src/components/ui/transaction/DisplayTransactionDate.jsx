import React from "react"

const DisplayTransactionDate = ({ data }) => {
    const [year, month, day] = data.date.split("-")
    const formatDate = `${day}.${month}.${year}`

    return <p>{formatDate}</p>
}

export default DisplayTransactionDate
