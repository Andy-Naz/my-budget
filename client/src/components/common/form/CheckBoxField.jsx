import React, { useEffect, useState } from "react"

const CheckBoxField = ({ options, name, onChange, label, valueProperty, contentProperty, checkedAccounts }) => {
    const [checkboxData, setCheckboxData] = useState([])
    // console.log("checkedAccounts", checkedAccounts)
    // console.log("checkboxData", checkboxData)

    const handleChange = ({ target }) => {
        if (!checkboxData.includes(target.value)) {
            setCheckboxData((prevState) => [...prevState, target.value])
        } else {
            setCheckboxData(checkboxData.filter((item) => item !== target.value))
        }
    }

    useEffect(() => {
        onChange({ name, value: checkboxData })
    }, [checkboxData])

    useEffect(() => {
        if (checkedAccounts.length !== checkboxData.length) {
            setCheckboxData([])
        }
    }, [checkedAccounts])

    return (
        <>
            <label className="form-label">{label}</label>
            <div>
                {options.map((option) => (
                    <div key={option[valueProperty]} className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name={name}
                            id={option[valueProperty]}
                            checked={checkedAccounts.includes(option[valueProperty])}
                            value={option[valueProperty]}
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor={option[valueProperty]}>
                            {option[contentProperty]}
                        </label>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CheckBoxField
