import React from "react"

const SelectField = ({ label, value, onChange, defaultOption, options, name, error }) => {
    const optionsArray = !Array.isArray(options) && typeof options === "object" ? Object.values(options) : options

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value })
    }

    return (
        <div>
            <div className="flex items-center justify-between">
                <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
                    {label}
                </label>
            </div>
            <div className="mt-2 relative flex">
                <select
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    className="block w-full rounded-md border-1 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                    <option disabled value="">
                        {defaultOption}
                    </option>
                    {optionsArray &&
                        optionsArray.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                </select>
                <div className="absolute -bottom-4 right-0 text-xs">
                    {error && <div className="text-red-500">{error}</div>}
                </div>
            </div>
        </div>
    )
}

export default SelectField
