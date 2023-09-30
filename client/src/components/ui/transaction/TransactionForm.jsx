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
import Loading from "../../common/loading/Loading"

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

    const goBack = () => {
        navigate(-1)
    }

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
        navigate(-1, { replace: true })
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
                                <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
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
                                <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
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
                                <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
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
                                <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
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
                                <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
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
                        <div className="flex justify-end">
                            <button
                                type="button"
                                onClick={goBack}
                                className="flex justify-center rounded-md bg-slate-600 px-8 py-1.5 mr-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                            >
                                Назад
                            </button>
                            <button
                                type="submit"
                                disabled={!isValid}
                                className="flex justify-center rounded-md bg-indigo-600 px-6 py-1.5 mr-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Создать
                            </button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
    return <Loading />
}

export default TransactionForm
