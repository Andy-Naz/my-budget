import React, { useState } from "react"
// import RadioField from "../../common/form/RadioField"
// import CheckBoxField from "../../common/form/CheckBoxField"

const TransactionFilter = ({ accounts, categories, valueProperty, contentProperty, onFilter }) => {
    const [selectedRadioCategory, setSelectedRadioCategory] = useState("")
    const [selectedCheckboxAccount, setSelectedCheckboxAccount] = useState([])

    const handleRadioChange = (id) => {
        setSelectedRadioCategory(id)
    }

    const handleCheckboxChange = (id) => {
        const updatedCheckboxAccount = selectedCheckboxAccount.includes(id)
            ? selectedCheckboxAccount.filter((c) => c !== category)
            : [...selectedCheckboxAccount, id]
        setSelectedCheckboxAccount(updatedCheckboxAccount)
    }

    const clearFilter = () => {
        setSelectedRadioCategory("")
        setSelectedCheckboxAccount([])
        onFilter("", [])
        // setSearchQuery("")
    }

    const applyFilter = () => {
        onFilter(selectedRadioCategory, selectedCheckboxAccount)
        // setSearchQuery("")
    }

    return (
        <>
            <div className="flex items-center justify-center">
                <h3 className="mt-1 text-lg leading-6 text-gray-600">Фильтры</h3>
            </div>
            <hr className="mt-4" />
            <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">По счетам</legend>
                <div className="mt-6 space-y-6">
                    {categories.map((category) => (
                        <div key={category[valueProperty]} className="flex items-center gap-x-3">
                            <div className="flex h-6 items-center">
                                <input
                                    type="radio"
                                    id={category[valueProperty] + "-radio"}
                                    value={category[valueProperty]}
                                    checked={selectedRadioCategory === category[valueProperty]}
                                    onChange={() => handleRadioChange(category[valueProperty])}
                                />
                            </div>
                            <div className="text-sm leading-6">
                                <label htmlFor={category[valueProperty] + "-radio"}>{category[contentProperty]}</label>
                            </div>
                        </div>
                    ))}
                </div>
            </fieldset>
            <hr className="mt-4" />
            <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">По категориям</legend>
                <div className="mt-6 space-y-6">
                    {accounts.map((account) => (
                        <div key={account[valueProperty]} className="relative flex gap-x-3">
                            <div className="flex h-6 items-center">
                                <input
                                    type="checkbox"
                                    id={account[valueProperty] + "-checkbox"}
                                    value={account[valueProperty]}
                                    checked={selectedCheckboxAccount.includes(account[valueProperty])}
                                    onChange={() => handleCheckboxChange(account[valueProperty])}
                                />
                            </div>
                            <div className="text-sm leading-6">
                                <label htmlFor={account[valueProperty] + "-checkbox"}>{account[contentProperty]}</label>
                            </div>
                        </div>
                    ))}
                </div>
            </fieldset>
            <div className="flex flex-col mt-4 px-4">
                <button
                    onClick={applyFilter}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-2"
                >
                    Применить
                </button>
                <button
                    onClick={clearFilter}
                    className="flex w-full justify-center rounded-md bg-slate-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                >
                    Очистить
                </button>
            </div>
            {/* <h3>Фильтр</h3>
            <div>
                <label>Radio Options:</label>
                {categories.map((category) => (
                    <div key={category[valueProperty]}>
                        <input
                            type="radio"
                            id={category[valueProperty] + "-radio"}
                            value={category[valueProperty]}
                            checked={selectedRadioCategory === category[valueProperty]}
                            onChange={() => handleRadioChange(category[valueProperty])}
                        />
                        <label htmlFor={category[valueProperty] + "-radio"}>{category[contentProperty]}</label>
                    </div>
                ))}
            </div>
            <div>
                <label>Checkbox Options:</label>
                {accounts.map((account) => (
                    <div key={account[valueProperty]}>
                        <input
                            type="checkbox"
                            id={account[valueProperty] + "-checkbox"}
                            value={account[valueProperty]}
                            checked={selectedCheckboxAccount.includes(account[valueProperty])}
                            onChange={() => handleCheckboxChange(account[valueProperty])}
                        />
                        <label htmlFor={account[valueProperty] + "-checkbox"}>{account[contentProperty]}</label>
                    </div>
                ))}
            </div>

            <button onClick={applyFilter} className="btn btn-warning mt-2">
                Применить
            </button>
            <button onClick={clearFilter} className="btn btn-secondary mt-2">
                Очистить
            </button> */}
        </>
    )
}

export default TransactionFilter
