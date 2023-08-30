import React, { useEffect, useState } from "react"
import API from "../../../api"

const Transaction = ({ data }) => {  
    const [accountName, setAccountName] = useState()
    const [categoryName, setCategoryName] = useState()

    useEffect(() => {
        API.accounts.getAccountById(data.account).then((data) => setAccountName(data.name))
        API.categories.getCategoryById(data.category).then((data) => setCategoryName(data.name))
    }, [])

    if (accountName && categoryName) {
        return (
            <div className="card mb-2 transaction">
                <div className="card-body">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-4">
                                <h5 className="card-title">{accountName}</h5>
                                <p className="card-text">{categoryName}</p>
                            </div>
                            <div className="col-5 text-transaction">
                                <p className="card-text">{!data.comment ? "--------------------" : data.comment}</p>
                            </div>
                            <div className="col-1">
                                <div className="d-flex justify-content-end">
                                    <p className="card-text">{data.amount.toLocaleString()}</p>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="d-flex justify-content-end">
                                    <button type="button" className="btn btn-outline-success ms-1">
                                        <i className="bi bi-pencil-square"></i>
                                    </button>
                                    <button type="button" className="btn btn-outline-danger ms-1">
                                        <i className="bi bi-archive-fill"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Transaction
