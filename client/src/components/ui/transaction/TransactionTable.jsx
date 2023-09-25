import React from "react"
import { Link } from "react-router-dom"
import Account from "../Account"
import Category from "../Category"
import Date from "../DateTransaction"
import Table from "../../common/table/table"
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline"

const TransactionTable = ({ transactions, onSort, selectedSort, onRemove, ...rest }) => {
    const columns = {
        date: { path: "created_at", name: "Дата", component: (transaction) => <Date data={transaction} /> },
        account: { path: "account", name: "Счет", component: (transaction) => <Account data={transaction} /> },
        category: { path: "category", name: "Категория", component: (transaction) => <Category data={transaction} /> },
        comment: { path: "comment", name: "Комментарий" },
        amount: { path: "amount", name: "Сумма" },
        tools: {
            path: "tools",
            component: (transaction) => (
                <div className="flex">
                    <div>
                        <Link to={`/transaction/${transaction._id}`}>
                            <PencilIcon className="w-4 hover:text-green-600 mr-2" />
                        </Link>
                    </div>
                    <div>
                        <TrashIcon
                            role="button"
                            className="w-4 hover:text-red-600"
                            onClick={() => onRemove(transaction._id)}
                        />
                    </div>
                </div>
            ),
        },
    }

    return <Table onSort={onSort} selectedSort={selectedSort} columns={columns} data={transactions} />
}

export default TransactionTable
