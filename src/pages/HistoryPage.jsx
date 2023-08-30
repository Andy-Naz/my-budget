import React from "react"
import TransactionList from "../components/TransactionList"
import HistoryFilter from "../components/ui/HistoryFilter"
import { Link } from "react-router-dom"

const HistoryPage = () => {
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-8">
                        <h2>История транзакций</h2>
                    </div>
                    <div className="col-2">
                        <HistoryFilter />
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
                <TransactionList />
            </div>
        </>
    )
}

export default HistoryPage
