import React from "react"
import Widget from "../components/ui/Widget"
// import useMockData from "../utils/mockData"
import { useSelector } from "react-redux"
import { getAccounts, getAccountsLoadingStatus } from "../store/accounts"
import { getTransactions, getTransactionsLoadingStatus } from "../store/transactions"
import { calculate } from "../utils/calculate"
import { getCategories, getCategoriesLoadingStatus } from "../store/categories"
import useDemo from "../hook/useDemo"

const MainPage = () => {
    // const { error, initialize } = useMockData()
    // const handleClick = () => {
    //     initialize()
    // }
    const { error, setDemoData } = useDemo()
    const handleDemo = () => {
        setDemoData()
    }

    const accounts = useSelector(getAccounts())
    const categories = useSelector(getCategories())
    const transactions = useSelector(getTransactions())

    const accountsLoading = useSelector(getAccountsLoadingStatus())
    const categoriesLoading = useSelector(getCategoriesLoadingStatus())
    const transactionsLoading = useSelector(getTransactionsLoadingStatus())

    if (!accountsLoading && !categoriesLoading && !transactionsLoading) {
        const calculateAccounts = calculate(transactions, accounts, categories)
        const widgetTitles = ["Счета", "Доходы", "Расходы"]

        return (
            <>
                {/* <button className="btn btn-primary" onClick={handleClick}>
                    Инициализировать
                </button> */}
                <button className="btn btn-primary" onClick={handleDemo}>
                    Загрузить Демо
                </button>
                <div className="container mt-3">
                    <div className="row align-items-start">
                        {widgetTitles.map((widgetTitle) => (
                            <div key={widgetTitle} className="col mb-3">
                                <Widget type="card" data={calculateAccounts} title={widgetTitle} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">{/* <Widget type="analytics" /> */}</div>
                    </div>
                </div>
            </>
        )
    }
    return "Loading..."
}

export default MainPage
