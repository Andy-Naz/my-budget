import React, { useState, useEffect } from "react"
import { paginate } from "../../utils/paginate"
import Pagination from "../ui/Pagination"
import TransactionFilter from "./transaction/TransactionFilter"
import TransactionTable from "../../components/ui/transaction/TransactionTable"
import _ from "lodash"
import { useSelector } from "react-redux"
import { getCurrentUserId } from "../../store/users"
import { getAccounts, getAccountsLoadingStatus } from "../../store/accounts"
import { getCategories, getCategoriesLoadingStatus } from "../../store/categories"
import { getTransactions } from "../../store/transactions"
import SelectField from "../common/form/SelectField"

const TransactionsListPage = () => {
    const transactions = useSelector(getTransactions())
    const currentUserId = useSelector(getCurrentUserId())

    const accounts = useSelector(getAccounts())
    const categories = useSelector(getCategories())

    const accountsLoading = useSelector(getAccountsLoadingStatus())
    const categoriesLoading = useSelector(getCategoriesLoadingStatus())

    // const professions = useSelector(getProfessions())
    // const professionsLoading = useSelector(getProfessionsLoadingStatus())

    const [currentPage, setCurrentPage] = useState(1)
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedAccount, setSelectedAccount] = useState()
    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" })
    const rowsList = [
        { label: "5", value: "5" },
        { label: "10", value: "10" },
        { label: "15", value: "15" },
    ]
    const [data, setData] = useState({
        rows: "5",
    })

    const pageSize = data.rows

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }))
    }

    const handleDelete = (userId) => {
        // setTransactions(transactions.filter((user) => user._id !== userId));
        console.log(userId)
    }

    useEffect(() => {
        setCurrentPage(1)
    }, [selectedAccount, searchQuery, data])

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
        setSelectedAccount()
        setSearchQuery("")
    }

    if (transactions) {
        function filterTransactions(data) {
            let filteredTransactions = null
            if (searchQuery) {
                filteredTransactions = data.filter((transaction) =>
                    transaction.comment.toLowerCase().includes(searchQuery.toLowerCase())
                )
            } else if (selectedAccount) {
                filteredTransactions = data.filter((transaction) => transaction.account === selectedAccount._id)
            } else {
                filteredTransactions = data
            }
            return filteredTransactions
        }

        const filteredTransactions = filterTransactions(transactions)

        const count = filteredTransactions.length

        const sortedTransactions = _.orderBy(filteredTransactions, [sortBy.path], [sortBy.order])

        const transactionCrop = paginate(sortedTransactions, currentPage, pageSize)

        return (
            <div className="d-flex">
                {accounts && !accountsLoading && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <TransactionFilter
                            items={accounts}
                            onItemSelect={handleAccountSelect}
                            selectedItem={selectedAccount}
                            valueProperty={"_id"}
                            contentProperty={"name"}
                        />
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
                        label="Категория"
                        // defaultOption="5"
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
                            onDelete={handleDelete}
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
