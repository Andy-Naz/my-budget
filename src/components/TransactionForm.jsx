import React, { useEffect, useState } from "react"
import { validator } from "../utils/validator"
import SelectField from "./common/form/selectField"
import TextField from "./common/form/textField"
import TextAreaField from "./common/form/textAreaField"
import API from "../api"
// import CheckBoxField from "../common/form/checkBoxField"
// import { useDispatch, useSelector } from "react-redux"
// import { getQualities } from "../../store/qualities"
// import { getProfessions } from "../../store/professions"
// import { singUp } from "../../store/users"

const TransactionForm = () => {
    // const dispatch = useDispatch()
    const [accounts, setAccounts] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        API.accounts.fetchAll().then((data) => {
            const accountsList = data.map((account) => ({ label: account.name, value: account._id }))
            setAccounts(accountsList)
            // console.log(accountsList)
        })

        API.categories.fetchAll().then((data) => {
            const categoriesList = data.map((category) => ({ label: category.name, value: category._id }))
            setCategories(categoriesList)
            // console.log(categoriesList)
        })
    }, [])

    useEffect(() => {
        console.log("accounts", accounts), console.log("categories", categories)
    }, [accounts])

    const [data, setData] = useState({
        account: "",
        category: "",
        amount: "",
        comment: "",
    })
    const [errors, setErrors] = useState({})

    // const accounts = useSelector(getAccounts())
    // const accountsList = accounts.map((account) => ({ label: account.name, value: account._id }))

    // const categories = useSelector(getCategories())
    // const categoriesList = categories.map((category) => ({ label: category.name, value: category._id }))

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
        // const newData = { ...data, qualities: data.qualities.map((q) => q.value) }
        console.log(data)
        // dispatch(singUp(newData))
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
                                options={accounts}
                                name="account"
                                onChange={handleChange}
                                value={data.account}
                                error={errors.account}
                            />
                            <SelectField
                                label="Категория"
                                defaultOption="Выбрать из списка..."
                                options={categories}
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
                                label="Сообщение"
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
