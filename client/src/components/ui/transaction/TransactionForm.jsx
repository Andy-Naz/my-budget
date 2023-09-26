import React, { useEffect, useState } from "react"
import { validator } from "../../../utils/validator"
import SelectField from "../../common/form/SelectField"
import TextField from "../../common/form/TextField"
import TextAreaField from "../../common/form/TextAreaField"
import { getAccounts, getAccountsLoadingStatus } from "../../../store/accounts"
import { useDispatch, useSelector } from "react-redux"
import { getCategories, getCategoriesLoadingStatus } from "../../../store/categories"
import { createTransaction } from "../../../store/transactions"
import { useNavigate } from "react-router-dom"

const TransactionForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const accounts = useSelector(getAccounts())
    const accountsLoading = useSelector(getAccountsLoadingStatus())

    const categories = useSelector(getCategories())
    const categoriesLoading = useSelector(getCategoriesLoadingStatus())

    const [data, setData] = useState({
        account: "",
        category: "",
        amount: "",
        comment: "",
        date: "",
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
        date: {
            isRequired: {
                message: "Необходимо установить дату",
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
        dispatch(createTransaction(newData))
        navigate("/history", { replace: true })
    }

    if (!accountsLoading && !categoriesLoading) {
        const accountsList = accounts.map((account) => ({ label: account.name, value: account._id }))
        const categoriesList = categories.map((category) => ({ label: category.name, value: category._id }))

        return (
            <>
                <div className="w-full lg:w-8/12 px-4 mx-auto pt-10">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-base font-semibold leading-7 text-gray-900">Создание новой транзакции</h3>
                        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                            Заполните всю необходимую информацию
                        </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mt-6 border-t border-gray-100">
                            <dl className="divide-y divide-gray-100">
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Дата</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        <TextField
                                            name="date"
                                            type="date"
                                            value={data.date}
                                            onChange={handleChange}
                                            error={errors.date}
                                        />
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Счет</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        <SelectField
                                            defaultOption="Выбрать из списка..."
                                            options={accountsList}
                                            name="account"
                                            onChange={handleChange}
                                            value={data.account}
                                            error={errors.account}
                                        />
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Категория</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        <SelectField
                                            defaultOption="Выбрать из списка..."
                                            options={categoriesList}
                                            name="category"
                                            onChange={handleChange}
                                            value={data.category}
                                            error={errors.category}
                                        />
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Сумма</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        <TextField
                                            name="amount"
                                            type="number"
                                            value={data.amount}
                                            onChange={handleChange}
                                            error={errors.amount}
                                        />
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Комментарий</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        <TextAreaField
                                            value={data.comment || ""}
                                            onChange={handleChange}
                                            name="comment"
                                            error={errors.comment}
                                        />
                                    </dd>
                                </div>
                            </dl>
                        </div>
                        <button
                            type="submit"
                            disabled={!isValid}
                            className="flex w-full sm:w-2/12 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Создать
                        </button>
                    </form>
                </div>

                {/* <div className="container mt-5">
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
                </div> */}
            </>
        )
    }
    return "Loading..."
}

export default TransactionForm
