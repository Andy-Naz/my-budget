import Transaction from "./Transaction"
import { useSelector } from "react-redux"
import { getTransactions } from "../../../store/transactions"

const TransactionList = ({ onRemove }) => {
    const transactions = useSelector(getTransactions())

    if (transactions.length > 0) {
        return (
            <>
                {transactions.map((transaction) => (
                    <Transaction key={transaction._id} data={transaction} onRemove={onRemove} />
                ))}
            </>
        )
    }
    return "Loading..."
}

export default TransactionList
