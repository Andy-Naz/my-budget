import React, { useEffect, useState } from "react"
import API from "../api"

const TransactionList = () => {
    const [transactions, setTransactions] = useState([])
    useEffect(() => {
        API.transaction.fetchAll().then((data) => setTransactions(data))
    }, [])
    return
}

export default TransactionList
