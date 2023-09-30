import React from "react"

const TextAreaField = ({ label, name, value, onChange, error }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value })
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

                <div className="absolute -bottom-4 right-0 text-xs">
                    {error && <div className="text-red-500">{error}</div>}
                </div>
            </div>
        </div>
    )
}
TextAreaField.defaultProps = {
    type: "text",
}

export default TextAreaField
