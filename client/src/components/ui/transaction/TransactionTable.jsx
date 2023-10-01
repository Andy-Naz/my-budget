import React from "react"
import Table from "../../common/table/Table"
import DisplayAccountName from "./DisplayAccountName"
import DisplayCategoryName from "./DisplayCategoryName"
import DisplayTransactionDate from "./DisplayTransactionDate"
import DisplayTransactionTools from "./DisplayTransactionTools"

const TransactionTable = ({ transactions, onSort, selectedSort, onRemove, ...rest }) => {
    const columns = {
        date: {
            path: "created_at",
            name: "Дата",
            component: (transaction) => <DisplayTransactionDate data={transaction} />,
        },
        account: {
            path: "account",
            name: "Счет",
            component: (transaction) => <DisplayAccountName data={transaction} />,
        },
        category: {
            path: "category",
            name: "Категория",
            component: (transaction) => <DisplayCategoryName data={transaction} />,
        },
        comment: { path: "comment", name: "Комментарий" },
        amount: { path: "amount", name: "Сумма" },
        tools: {
            path: "tools",
            component: (transaction) => <DisplayTransactionTools data={transaction} />,
        },
    }

    return <Table onSort={onSort} selectedSort={selectedSort} columns={columns} data={transactions} />
}

export default TransactionTable
