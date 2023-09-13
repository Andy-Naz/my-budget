import React, { useState } from "react"
import RadioField from "../../common/form/RadioField"
import CheckBoxField from "../../common/form/CheckBoxField"

const TransactionFilter = ({
    accounts,
    categories,
    valueProperty,
    contentProperty,
    onChange,
    checkedCategory,
    checkedAccounts,
}) => {
    // const [filter, setFilter] = useState([{ accounts: {} }, { categories: {} }])

    // const handleFilterSelect = (item) => {
    //     setFilter(item)
    // }
    return (
        <>
            <RadioField
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
            />

            {/* <ul className="list-group">
                {items.map((item) => (
                    <li
                        key={item[valueProperty]}
                        className={"list-group-item" + (item === selectedItem ? " active" : "")}
                        onClick={() => onItemSelect(item)}
                        role="button"
                    >
                        {item[contentProperty]}
                    </li>
                ))}
            </ul> */}
            {/* <h6>Категории</h6>
            {categories.map((category) => (
                <div className="form-check" key={category[valueProperty]}>
                    <input
                        className={"form-check-input"}
                        type="radio"
                        id={category[contentProperty] + "_" + category[valueProperty]}
                        value={category[valueProperty]}
                        onChange={() => handleFilterSelect(category)}
                    ></input>
                    <label htmlFor={category[contentProperty] + "_" + category[valueProperty]}>
                        {category[contentProperty]}
                    </label>
                </div>
            ))}
            <hr></hr>
            <h6>Счета</h6>
            {accounts.map((account) => (
                <div className="form-check" key={account[valueProperty]}>
                    <input
                        className={"form-check-input"}
                        type="checkbox"
                        id={account[contentProperty]}
                        onChange={() => handleFilterSelect(account)}
                    ></input>
                    <label htmlFor={account[contentProperty]}>{account[contentProperty]}</label>
                </div>
            ))} */}
        </>

        //     <div className="d-flex justify-content-end dropdown">
        //         <button
        //             className="btn btn-outline-primary px-4 dropdown-toggle"
        //             type="button"
        //             id="dropdownMenuButton1"
        //             data-bs-toggle="dropdown"
        //             data-bs-auto-close="outside"
        //             aria-expanded="false"
        //         >
        //             <p className="d-inline me-2">Фильтры</p>
        //             <i className="bi bi-filter d-inline"></i>
        //         </button>
        //         <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        //             <li>
        //                 <div className="btn-group dropend w-100">
        //                     <button
        //                         type="button"
        //                         className="btn dropdown-item dropdown-toggle"
        //                         data-bs-toggle="dropdown"
        //                         aria-expanded="false"
        //                     >
        //                         Счет
        //                     </button>
        //                     <ul className="dropdown-menu">
        //                         <li>
        //                             <a className="dropdown-item" href="#">
        //                                 Menu item
        //                             </a>
        //                         </li>
        //                         <li>
        //                             <a className="dropdown-item" href="#">
        //                                 Menu item
        //                             </a>
        //                         </li>
        //                         <li>
        //                             <a className="dropdown-item" href="#">
        //                                 Menu item
        //                             </a>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </li>
        //             <li>
        //                 <div className="btn-group dropend w-100">
        //                     <button
        //                         type="button"
        //                         className="btn dropdown-item dropdown-toggle"
        //                         data-bs-toggle="dropdown"
        //                         aria-expanded="false"
        //                     >
        //                         Категория
        //                     </button>
        //                     <ul className="dropdown-menu">
        //                         <li>
        //                             <a className="dropdown-item" href="#">
        //                                 Menu item
        //                             </a>
        //                         </li>
        //                         <li>
        //                             <a className="dropdown-item" href="#">
        //                                 Menu item
        //                             </a>
        //                         </li>
        //                         <li>
        //                             <a className="dropdown-item" href="#">
        //                                 Menu item
        //                             </a>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </li>
        //             <li>
        //                 <div className="btn-group dropend w-100">
        //                     <button
        //                         type="button"
        //                         className="btn dropdown-item dropdown-toggle"
        //                         data-bs-toggle="dropdown"
        //                         aria-expanded="false"
        //                     >
        //                         Сумма
        //                     </button>
        //                     <ul className="dropdown-menu">
        //                         <li>
        //                             <a className="dropdown-item" href="#">
        //                                 Menu item
        //                             </a>
        //                         </li>
        //                         <li>
        //                             <a className="dropdown-item" href="#">
        //                                 Menu item
        //                             </a>
        //                         </li>
        //                         <li>
        //                             <a className="dropdown-item" href="#">
        //                                 Menu item
        //                             </a>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </li>
        //         </ul>
        //     </div>
    )
}

export default TransactionFilter
