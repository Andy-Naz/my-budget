import React, { useState, useEffect } from "react"
import { paginate } from "../utils/paginate"
import Pagination from "../components/ui/Pagination"
import TransactionFilter from "../components/ui/transaction/TransactionFilter"
import TransactionTable from "../components/ui/transaction/TransactionTable"
import _ from "lodash"
import { useDispatch, useSelector } from "react-redux"
import { getAccounts, getAccountsLoadingStatus } from "../store/accounts"
import { getCategories, getCategoriesLoadingStatus } from "../store/categories"
import { getTransactions, removeTransaction } from "../store/transactions"
import SelectField from "../components/common/form/SelectField"
import Loading from "../components/common/loading/Loading"
import { FunnelIcon } from "@heroicons/react/24/outline"
import { Popover, PopoverHandler, PopoverContent } from "@material-tailwind/react"

const TransactionsListPage = () => {
    const dispatch = useDispatch()

    const transactions = useSelector(getTransactions())

    const accounts = useSelector(getAccounts())
    const categories = useSelector(getCategories())

    const accountsLoading = useSelector(getAccountsLoadingStatus())
    const categoriesLoading = useSelector(getCategoriesLoadingStatus())

    const [currentPage, setCurrentPage] = useState(1)
    const [searchQuery, setSearchQuery] = useState("")
    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" })

    const [data, setData] = useState({ rows: "10" })
    const [filteredTransactions, setFilteredTransactions] = useState()

    const rowsList = [
        { label: "10", value: "10" },
        { label: "20", value: "20" },
        { label: "50", value: "50" },
        { label: "100", value: "100" },
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
    }, [searchQuery, data, filteredTransactions])

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
        if (typeof pageIndex === "number") setCurrentPage(pageIndex)
    }

    const handleSort = (item) => {
        setSortBy(item)
    }

    const handleRemoveTransaction = (id) => {
        dispatch(removeTransaction(id))
    }

    if (filteredTransactions) {
        let currentTransactionList = []
        if (searchQuery) {
            currentTransactionList = filteredTransactions.filter((transaction) =>
                transaction.comment.toLowerCase().includes(searchQuery.toLowerCase())
            )
        } else {
            currentTransactionList = filteredTransactions
        }

        const count = currentTransactionList.length

        const sortedTransactions = _.orderBy(currentTransactionList, [sortBy.path], [sortBy.order])

        const transactionCrop = paginate(sortedTransactions, currentPage, pageSize)

        return (
            <div className="container max-w-7xl mx-auto mt-4">
                <div className="flex w-full">
                    <div className="lg:w-1/6 px-2 mt-20 hidden lg:block">
                        {!accountsLoading && !categoriesLoading && (
                            <TransactionFilter
                                accounts={accounts}
                                categories={categories}
                                valueProperty={"_id"}
                                contentProperty={"name"}
                                onFilter={handleFilter}
                            />
                        )}
                    </div>
                    <div className="flex flex-col w-full lg:w-5/6 px-2">
                        <div className="flex md:flex-row flex-col justify-between">
                            <div className="flex flex-row justify-start items-center md:w-5/12 lg:w-4/12 w-full mt-2">
                                <div className="mr-4 sm:pl-12">
                                    <p className="align-middle">Показать</p>
                                </div>
                                <div className="-mt-2">
                                    <SelectField
                                        options={rowsList}
                                        name="rows"
                                        onChange={handleChange}
                                        value={data.rows}
                                    />
                                </div>
                                <div className="flex sm:hidden">
                                    <div className="mx-4">
                                        <p className="align-middle">Фильтры</p>
                                    </div>
                                    <Popover placement="bottom">
                                        <PopoverHandler>
                                            <div>
                                                <FunnelIcon
                                                    role="button"
                                                    title="Фильтры"
                                                    className="w-6 hover:text-indigo-500"
                                                />
                                            </div>
                                        </PopoverHandler>
                                        <PopoverContent>
                                            {!accountsLoading && !categoriesLoading && (
                                                <TransactionFilter
                                                    accounts={accounts}
                                                    categories={categories}
                                                    valueProperty={"_id"}
                                                    contentProperty={"name"}
                                                    onFilter={handleFilter}
                                                />
                                            )}
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>
                            <div className="flex flex-row justify-end md:w-5/12 lg:w-4/12 w-full mt-2 md:pl-0 sm:pl-12">
                                <div className="flex items-center justify-center">
                                    <p className="mr-4 align-middle">Поиск</p>
                                </div>
                                <input
                                    className="block w-full rounded-md border-1 px-2 py-1 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    type="search"
                                    placeholder="По комментарию..."
                                    value={searchQuery}
                                    onChange={handleSearchQuery}
                                />
                            </div>
                        </div>

                        <div className="w-full">
                            {count > 0 && (
                                <TransactionTable
                                    transactions={transactionCrop}
                                    onSort={handleSort}
                                    selectedSort={sortBy}
                                    onRemove={handleRemoveTransaction}
                                />
                            )}
                            <div className="w-full">
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
            </div>
        )
    }
    return <Loading />
}

export default TransactionsListPage
