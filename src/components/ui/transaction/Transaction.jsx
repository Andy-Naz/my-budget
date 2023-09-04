import React from "react"
import { useSelector } from "react-redux"
import { getAccounts, getAccountsLoadingStatus } from "../../../store/accounts"
import { getCategories, getCategoriesLoadingStatus } from "../../../store/categories"
import { Link } from "react-router-dom"

const Transaction = ({ data, onRemove }) => {
    const accounts = useSelector(getAccounts())
    const categories = useSelector(getCategories())

    const accountsLoading = useSelector(getAccountsLoadingStatus())
    const categoriesLoading = useSelector(getCategoriesLoadingStatus())

    if (!accountsLoading && !categoriesLoading) {
        const accountName = accounts.find((account) => account._id === data.account)["name"]
        const categoryName = categories.find((category) => category._id === data.category)["name"]

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
                                    <Link to={`/transaction/${data._id}`}>
                                        <button type="button" className="btn btn-outline-success ms-1">
                                            <i className="bi bi-pencil-square"></i>
                                        </button>
                                    </Link>

                                    <button
                                        type="button"
                                        className="btn btn-outline-danger ms-1"
                                        onClick={() => onRemove(data._id)}
                                    >
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
