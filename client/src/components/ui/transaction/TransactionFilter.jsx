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
            <h3>Фильтр</h3>
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

            {/* <RadioField
                options={categories}
                name="category"
                onChange={onChange}
                label="Категории"
                valueProperty={valueProperty}
                contentProperty={contentProperty}
                checkedCategory={checkedCategory}
            />
            <CheckBoxField
                options={accounts}
                name="accounts"
                onChange={onChange}
                label="Счета"
                valueProperty={valueProperty}
                contentProperty={contentProperty}
                checkedAccounts={checkedAccounts}
            /> */}

            <button onClick={applyFilter} className="btn btn-warning mt-2">
                Применить
            </button>
            <button onClick={clearFilter} className="btn btn-secondary mt-2">
                Очистить
            </button>
        </>
    )
}

export default TransactionFilter
