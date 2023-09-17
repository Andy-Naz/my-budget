import Transaction from "./Transaction"
import { useSelector } from "react-redux"
import { getTransactions, getTransactionsLoadingStatus } from "../../../store/transactions"

const TransactionList = ({ onRemove }) => {
    const transactions = useSelector(getTransactions())
    const transactionsLoading = useSelector(getTransactionsLoadingStatus())

    if (!transactionsLoading) {
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
