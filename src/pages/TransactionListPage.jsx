import React, { useState, useEffect } from "react"
import { paginate } from "../utils/paginate"
import Pagination from "../components/ui/Pagination"
import TransactionFilter from "../components/ui/transaction/TransactionFilter"
import TransactionTable from "../components/ui/transaction/TransactionTable"
import _ from "lodash"
import { useDispatch, useSelector } from "react-redux"
import { getCurrentUserId } from "../store/users"
import { getAccounts, getAccountsLoadingStatus } from "../store/accounts"
import { getCategories, getCategoriesLoadingStatus } from "../store/categories"
import { getTransactions, removeTransaction } from "../store/transactions"
import SelectField from "../components/common/form/SelectField"

const TransactionsListPage = () => {
    const dispatch = useDispatch()

    const transactions = useSelector(getTransactions())
    const currentUserId = useSelector(getCurrentUserId())

    const accounts = useSelector(getAccounts())
    const categories = useSelector(getCategories())

    const accountsLoading = useSelector(getAccountsLoadingStatus())
    const categoriesLoading = useSelector(getCategoriesLoadingStatus())

    const [currentPage, setCurrentPage] = useState(1)
    const [searchQuery, setSearchQuery] = useState("")
    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" })
    console.log(sortBy)
    const rowsList = [
        { label: "5", value: "5" },
        { label: "10", value: "10" },
        { label: "15", value: "15" },
    ]
    const [data, setData] = useState({
        rows: "5",
        category: "5310f6f217c1",
        accounts: [],
    })

    const [filter, setFilter] = useState(false)

    const pageSize = data.rows

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }))
    }

    useEffect(() => {
        setCurrentPage(1)
        // console.log(data)
    }, [searchQuery, data])

    const handleAccountSelect = (item) => {
        setSearchQuery("")
        setSelectedAccount(item)
    }

    const handleSearchQuery = ({ target }) => {
        setSelectedAccount()
        setSearchQuery(target.value)
    }

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    const handleSort = (item) => {
        setSortBy(item)
    }

    const clearFilter = () => {
        setData((prevState) => ({
            ...prevState,
            category: "5310f6f217c1",
            accounts: [],
        }))
        setSearchQuery("")
    }

    const applyFilter = () => {
        setSearchQuery("")
        setFilter(true)
    }

    const handleRemoveTransaction = (id) => {
        dispatch(removeTransaction(id))
    }

    if (transactions) {
        console.log(filter)

        function filterTransactions(dataset) {
            let filteredTransactions = null
            if (searchQuery) {
                filteredTransactions = dataset.filter((transaction) =>
                    transaction.comment.toLowerCase().includes(searchQuery.toLowerCase())
                )
            } else if (filter) {
                filteredTransactions = dataset.filter((transaction) => transaction.category === data.category)
                console.log(filter)
                console.log(filteredTransactions)

                if (data.accounts.length > 0) {
                    const filteredByAccount = filteredTransactions.filter((transaction) =>
                        data.accounts.includes(transaction.account)
                    )
                    filteredTransactions = filteredByAccount
                }
                // setFilter(false)
            } else {
                filteredTransactions = dataset
            }
            return filteredTransactions
        }

        const filteredTransactions = filterTransactions(transactions)
        console.log(filteredTransactions)

        const count = filteredTransactions.length

        const sortedTransactions = _.orderBy(filteredTransactions, [sortBy.path], [sortBy.order])

        const transactionCrop = paginate(sortedTransactions, currentPage, pageSize)

        return (
            <div className="d-flex">
                {!accountsLoading && !categoriesLoading && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <TransactionFilter
                            // items={accounts}
                            accounts={accounts}
                            categories={categories}
                            // onItemSelect={handleAccountSelect}
                            // selectedItem={selectedAccount}
                            valueProperty={"_id"}
                            contentProperty={"name"}
                            onChange={handleChange}
                            checkedCategory={data.category}
                            checkedAccounts={data.accounts}
                            // data={data}
                        />
                        <button onClick={applyFilter} className="btn btn-warning mt-2">
                            Применить
                        </button>
                        <button onClick={clearFilter} className="btn btn-secondary mt-2">
                            Очистить
                        </button>
                    </div>
                )}
                <div className="d-flex flex-column">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Поиск по комментарию..."
                        value={searchQuery}
                        onChange={handleSearchQuery}
                    ></input>
                    <SelectField
                        label="Количество транзакций на странице"
                        options={rowsList}
                        name="rows"
                        onChange={handleChange}
                        value={data.rows}
                    />

                    {count > 0 && (
                        <TransactionTable
                            transactions={transactionCrop}
                            onSort={handleSort}
                            selectedSort={sortBy}
                            onRemove={handleRemoveTransaction}
                        />
                    )}
                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        )
    }
    return "Loading..."
}

export default TransactionsListPage
