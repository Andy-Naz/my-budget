import React, { useEffect, useState } from "react"
import API from "../api"
import Transaction from "./common/transaction/Transaction"

const TransactionList = () => {
    const [transactions, setTransactions] = useState([])
    useEffect(() => {
        API.transaction.fetchAll().then((data) => setTransactions(data))
    }, [])
    if (transactions.length > 0) {
        return (
            <>
                {transactions.map((transaction) => (
                    <Transaction key={transaction._id} data={transaction} />
                ))}
            </>
        )
    }
    return "Loading..."
}

export default TransactionList
