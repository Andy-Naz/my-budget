import React from "react"
import TransactionList from "../components/ui/transaction/TransactionList"
import TransactionFilter from "../components/ui/transaction/TransactionFilter"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { removeTransaction } from "../store/transactions"

const TransactionListPage = () => {
    const dispatch = useDispatch()

    const handleRemoveTransaction = (id) => {
        dispatch(removeTransaction(id))
    }


    
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-8">
                        <h2>История транзакций</h2>
                    </div>
                    <div className="col-2">
                        <TransactionFilter />
                    </div>
                    <div className="col-2">
                        <Link to="/transaction">
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-outline-success px-4">
                                    <p className="d-inline me-2">Создать</p>
                                    <i className="bi bi-plus-circle d-inline"></i>
                                </button>
                            </div>
                        </Link>
                    </div>
                </div>
                <TransactionList onRemove={handleRemoveTransaction} />
            </div>
        </>
    )
}

export default TransactionListPage
