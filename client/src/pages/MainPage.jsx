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
        const calculateAccounts = calculate(transactions, accounts, categories)
        const widgetTitles = ["Счета", "Доходы", "Расходы"]

        const totalData = calculateTotal(transactions, categories)

        const chartData = calculateChart(transactions, categories)

        return (
            <>
                <div className="container mx-auto max-w-7xl">
                    <Dashboard summary={totalData} chart={chartData} />
                </div>
                <div className="container mt-3">
                    <div className="row align-items-start">
                        {widgetTitles.map((widgetTitle) => (
                            <div key={widgetTitle} className="col mb-3">
                                <Widget type="card" data={calculateAccounts} title={widgetTitle} />
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }
    return <Loading />
}

export default MainPage
