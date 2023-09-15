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

    const [data, setData] = useState({
        rows: "5",
        category: "5310f6f217c1",
        accounts: [],
    })
    const [filteredTransactions, setFilteredTransactions] = useState()

    const rowsList = [
        { label: "5", value: "5" },
        { label: "10", value: "10" },
        { label: "15", value: "15" },
    ]
    const pageSize = data.rows

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }))
    }

    useEffect(() => {
        setFilteredTransactions(transactions)
    }, [transactions])

    useEffect(() => {
        setCurrentPage(1)
    }, [searchQuery, data])

    const handleFilter = (selectedRadioCategory, selectedCheckboxAccount) => {
        let updatedFilteredTransactions = null
        if (selectedRadioCategory && selectedCheckboxAccount.length > 0) {
            updatedFilteredTransactions = transactions
                .filter((transaction) => selectedRadioCategory === transaction.category)
                .filter((transaction) => selectedCheckboxAccount.includes(transaction.account))
        } else if (selectedRadioCategory) {
            updatedFilteredTransactions = transactions.filter(
                (transaction) => selectedRadioCategory === transaction.category
            )
        } else if (selectedCheckboxAccount.length > 0) {
            updatedFilteredTransactions = transactions.filter((transaction) =>
                selectedCheckboxAccount.includes(transaction.account)
            )
        } else {
            updatedFilteredTransactions = transactions
        }
        setFilteredTransactions(updatedFilteredTransactions)
    }

    const handleSearchQuery = ({ target }) => {
        setSearchQuery(target.value)
    }

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    const handleSort = (item) => {
        setSortBy(item)
    }

    const handleRemoveTransaction = (id) => {
        dispatch(removeTransaction(id))
    }

    if (filteredTransactions) {
        if (searchQuery) {
            filteredTransactions.filter((transaction) =>
                transaction.comment.toLowerCase().includes(searchQuery.toLowerCase())
            )
        }

        const count = filteredTransactions.length

        const sortedTransactions = _.orderBy(filteredTransactions, [sortBy.path], [sortBy.order])

        const transactionCrop = paginate(sortedTransactions, currentPage, pageSize)

        return (
            <div className="d-flex">
                <div className="d-flex">
                    {!accountsLoading && !categoriesLoading && (
                        <div className="d-flex flex-column flex-shrink-0 p-3">
                            <TransactionFilter
                                accounts={accounts}
                                categories={categories}
                                valueProperty={"_id"}
                                contentProperty={"name"}
                                onFilter={handleFilter}
                            />
                        </div>
                    )}
                </div>
                <div className="d-flex flex-column">
                    <div className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Поиск по комментарию..."
                            value={searchQuery}
                            onChange={handleSearchQuery}
                        />
                        <button className="btn btn-outline-success">Найти</button>
                    </div>

                    <div className="d-flex flex-column">
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
            </div>
        )
    }
    return "Loading..."
}

export default TransactionsListPage
