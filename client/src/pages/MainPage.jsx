import React from "react"
import { useSelector } from "react-redux"
import { getAccounts, getAccountsLoadingStatus } from "../store/accounts"
import { getTransactions, getTransactionsLoadingStatus } from "../store/transactions"
import { getCategories, getCategoriesLoadingStatus } from "../store/categories"
import Dashboard from "../components/ui/Dashboard"
import Loading from "../components/common/loading/Loading"
import { calculateChart } from "../utils/calculateChart"

const MainPage = () => {
    const accounts = useSelector(getAccounts())
    const categories = useSelector(getCategories())
    const transactions = useSelector(getTransactions())

    const accountsLoading = useSelector(getAccountsLoadingStatus())
    const categoriesLoading = useSelector(getCategoriesLoadingStatus())
    const transactionsLoading = useSelector(getTransactionsLoadingStatus())

    if (!accountsLoading && !categoriesLoading && !transactionsLoading) {
        const chartData = calculateChart(transactions, categories, accounts)
        console.log(chartData)

        return (
            <>
                <div className="container mx-auto max-w-7xl">
                    <Dashboard chart={chartData} />
                </div>
            </>
        )
    }
    return <Loading />
}

export default MainPage
