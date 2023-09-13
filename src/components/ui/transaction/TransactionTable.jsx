import React from "react"
import Table from "../../common/table"
import { Link } from "react-router-dom"
import Account from "../Account"
import Category from "../Category"
import Date from "../DateTransaction"

const TransactionTable = ({ transactions, onSort, selectedSort, onRemove, ...rest }) => {
    const columns = {
        date: { path: "created_at", name: "Дата", component: (transaction) => <Date data={transaction} /> },
        account: { path: "account", name: "Счет", component: (transaction) => <Account data={transaction} /> },
        category: { path: "category", name: "Категория", component: (transaction) => <Category data={transaction} /> },
        comment: { path: "comment", name: "Комментарий" },
        amount: { path: "amount", name: "Сумма" },
        edit: {
            path: "edit",
            component: (transaction) => (
                <Link to={`/transaction/${transaction._id}`}>
                    <button type="button" className="btn btn-outline-success ms-1" title="Редактировать">
                        <i className="bi bi-pencil-square"></i>
                    </button>
                </Link>
            ),
        },
        remove: {
            path: "remove",
            component: (transaction) => (
                <button
                    type="button"
                    className="btn btn-outline-danger ms-1"
                    title="Удалить"
                    onClick={() => onRemove(transaction._id)}
                >
                    <i className="bi bi-trash3-fill"></i>
                </button>
            ),
        },
    }

    return <Table onSort={onSort} selectedSort={selectedSort} columns={columns} data={transactions} />
}

export default TransactionTable
