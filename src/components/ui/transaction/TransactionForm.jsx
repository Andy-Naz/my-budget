import React, { useEffect, useState } from "react"
import { validator } from "../../../utils/validator"
import SelectField from "../../common/form/SelectField"
import TextField from "../../common/form/TextField"
import TextAreaField from "../../common/form/TextAreaField"
import { getAccounts } from "../../../store/accounts"
import { useDispatch, useSelector } from "react-redux"
import { getCategories } from "../../../store/categories"
import { createTransaction } from "../../../store/transactions"

const TransactionForm = () => {
    const dispatch = useDispatch()

    const accounts = useSelector(getAccounts())
    const accountsList = accounts.map((account) => ({ label: account.name, value: account._id }))

    const categories = useSelector(getCategories())
    const categoriesList = categories.map((category) => ({ label: category.name, value: category._id }))

    const [data, setData] = useState({
        account: "",
        category: "",
        amount: "",
        comment: "",
    })
    const [errors, setErrors] = useState({})

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

    const clearForm = () => {
        setData({ account: "", category: "", amount: "", comment: "" })
        setErrors({})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if (!isValid) return
        const newData = { ...data, amount: Number(data.amount) }
        console.log(newData)
        // dispatch(singUp(newData))
        dispatch(createTransaction(newData))
        clearForm()
    }

    if (accounts.length > 0 && categories.length > 0) {
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

export default TransactionForm