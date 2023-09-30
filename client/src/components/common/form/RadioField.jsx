import React from "react"

const RadioField = ({ options, name, onChange, label, valueProperty, contentProperty, checkedCategory }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value })
    }

    return (
        <>
            <label className="form-label">{label}</label>
            <div>
                {options.map((option) => (
                    <div key={option[valueProperty]} className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name={name}
                            id={option[valueProperty]}
                            checked={option[valueProperty] === checkedCategory}
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

export default RadioField
