import React from "react"

const DateTransaction = ({ data }) => {
    const date = new Date(data.created_at)
    const year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDay()
    if (day < 10) {
        day = `0${day}`
    }

    if (month < 10) {
        month = `0${month + 1}`
    }
    const formatDate = `${day}.${month}.${year}`
    return <p>{formatDate}</p>
}

export default DateTransaction
