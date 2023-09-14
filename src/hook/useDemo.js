import { useState } from "react"
import accounts from "../demo/accounts.json"
import categories from "../demo/categories.json"
import transactions from "../demo/transactions.json"
import httpService from "../services/http.service"

const useDemo = () => {
    const [error, setError] = useState(null)

    async function setDemoData() {
        try {
            for (const account of accounts) {
                await httpService.put("account/" + account._id, account)
            }
            for (const category of categories) {
                await httpService.put("category/" + category._id, category)
            }
            for (const transaction of transactions) {
                await httpService.put("transactionDemo/" + transaction._id, transaction)
            }
        } catch (error) {
            setError(error)
        }
    }

    return { error, setDemoData }
}

export default useDemo
