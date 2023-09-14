import { useState } from "react"

import transactions from "../mockData/transactions.json"
import httpService from "../services/http.service"

const useDemo = () => {
    const [error, setError] = useState(null)

    async function initialize() {
        try {
            for (const transactionDemo of transactionsDemo) {
                await httpService.put("transaction/" + transaction._id, transaction)
            }
        } catch (error) {
            setError(error)
        }
    }

    return { error, initialize }
}

export default useDemo
