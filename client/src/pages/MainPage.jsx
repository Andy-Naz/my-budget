import React from "react"
import Widget from "../components/ui/Widget"
import { useSelector } from "react-redux"
import { getAccounts, getAccountsLoadingStatus } from "../store/accounts"
import { getTransactions, getTransactionsLoadingStatus } from "../store/transactions"
import { calculate } from "../utils/calculate"
import { getCategories, getCategoriesLoadingStatus } from "../store/categories"
import Dashboard from "../components/ui/Dashboard"
import { calculateTotal } from "../utils/calculateTotal"
import { transformDemoData } from "../utils/transformDemoData"
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
        const totalData = calculateTotal(transactions, categories)
        const chartData = calculateChart(transactions, categories, accounts)

        return (
            <>
                <div className="container mx-auto max-w-7xl">
                    <Dashboard summary={totalData} chart={chartData} />
                </div>
            </>
        )
    }
    return <Loading />
}

export default MainPage
