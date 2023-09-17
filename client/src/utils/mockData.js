import { useState } from "react"
import accounts from "../mockData/accounts.json"
import categories from "../mockData/categories.json"
import transactions from "../mockData/transactions.json"
import httpService from "../services/http.service"

const useMockData = () => {
    const [error, setError] = useState(null)

    async function initialize() {
        try {
            for (const account of accounts) {
                await httpService.put("account/" + account._id, account)
            }
            for (const category of categories) {
                await httpService.put("category/" + category._id, category)
            }
            for (const transaction of transactions) {
                await httpService.put("transaction/" + transaction._id, transaction)
            }
        } catch (error) {
            setError(error)
        }
    }

    return { error, initialize}
}

export default useMockData
