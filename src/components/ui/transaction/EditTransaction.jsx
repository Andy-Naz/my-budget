import React, { useEffect, useState } from "react"
import { validator } from "../../../utils/validator"
import SelectField from "../../common/form/SelectField"
import TextField from "../../common/form/TextField"
import TextAreaField from "../../common/form/TextAreaField"
import { getAccounts, getAccountsLoadingStatus } from "../../../store/accounts"
import { useDispatch, useSelector } from "react-redux"
import { getCategories, getCategoriesLoadingStatus } from "../../../store/categories"
import { getTransactions, getTransactionsLoadingStatus, updateTransaction } from "../../../store/transactions"
import { useNavigate, useParams } from "react-router-dom"

const EditTransaction = () => {
    const { transactionId } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const accounts = useSelector(getAccounts())
    const accountsLoading = useSelector(getAccountsLoadingStatus())

    const categories = useSelector(getCategories())
    const categoriesLoading = useSelector(getCategoriesLoadingStatus())

    const transaction = useSelector(getTransactions())
    const transactionLoading = useSelector(getTransactionsLoadingStatus())
    const currentTransaction = transaction?.find((transaction) => transaction._id === transactionId)

    const [data, setData] = useState()
    const [errors, setErrors] = useState({})

    useEffect(() => {
        if (!accountsLoading && !categoriesLoading && !transactionLoading) {
            setData(currentTransaction)
        }
    }, [currentTransaction])

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }))
    }

    const validatorConfig = {
        account: {
            isRequired: {
                message: "Необходимо выбрать счет из списка",
            },
        },
        category: {
            isRequired: {
                message: "Необходимо выбрать категорию из списка",
            },
        },
        amount: {
            isRequired: {
                message: "Необходимо указать числовое значение",
            },
            isPositiveNumber: {
                message: "Число должно быть положительным",
            },
        },
    }

    useEffect(() => {
        validate()
    }, [data])

    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    const isValid = Object.keys(errors).length === 0

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if (!isValid) return
        const newData = { ...data, amount: Number(data.amount) }
        dispatch(updateTransaction(newData, transactionId))
        navigate("/history", { replace: true })
    }

    if (!accountsLoading && !categoriesLoading && !transactionLoading && data) {
        const accountsList = accounts.map((account) => ({ label: account.name, value: account._id }))
        const categoriesList = categories.map((category) => ({ label: category.name, value: category._id }))

        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 shadow p-4">
                        <h3>Новая транзакция</h3>
                        <form onSubmit={handleSubmit}>
                            <SelectField
                                label="Счет"
                                defaultOption="Выбрать из списка..."
                                options={accountsList}
                                name="account"
                                onChange={handleChange}
                                value={data.account}
                                error={errors.account}
                            />
                            <SelectField
                                label="Категория"
                                defaultOption="Выбрать из списка..."
                                options={categoriesList}
                                name="category"
                                onChange={handleChange}
                                value={data.category}
                                error={errors.category}
                            />
                            <TextField
                                label="Сумма"
                                name="amount"
                                type="number"
                                value={data.amount}
                                onChange={handleChange}
                                error={errors.amount}
                            />
                            <TextAreaField
                                value={data.comment || ""}
                                onChange={handleChange}
                                name="comment"
                                label="Комментарий"
                                error={errors.comment}
                            />

                            <button className="btn btn-primary w-100 mx-auto" type="submit" disabled={!isValid}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    return "Loading..."
}

export default EditTransaction
