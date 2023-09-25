import React from "react"

const TextAreaField = ({ label, name, value, onChange, error }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value })
    }
    const getInputClasses = () => {
        return "form-control" + (error ? " is-invalid" : "")
    }

    return (
        <div>
            <div className="flex items-center justify-between">
                <label htmlFor={name}>{label}</label>
            </div>
            <div className="mt-2 relative flex">
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />

                {/* {error && <div className="invalid-feedback ">{error}</div>} */}
            </div>
        </div>
    )
}
TextAreaField.defaultProps = {
    type: "text",
}

export default TextAreaField
