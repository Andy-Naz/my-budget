import React from "react"
import TransactionList from "../components/TransactionList"

const HistoryPage = () => {
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-8">
                        <h2>История транзакций</h2>
                    </div>
                    <div className="col-2">
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-outline-primary px-4">
                                <p className="d-inline me-2">Фильтры</p>
                                <i className="bi bi-filter d-inline"></i>
                            </button>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-outline-success px-4">
                                <p className="d-inline me-2">Создать</p>
                                <i className="bi bi-plus-circle d-inline"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <TransactionList />
            </div>
        </>
    )
}

export default HistoryPage
