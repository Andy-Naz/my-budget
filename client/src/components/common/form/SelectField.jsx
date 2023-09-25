import React from "react"

const SelectField = ({ label, value, onChange, defaultOption, options, name, error }) => {
    const optionsArray = !Array.isArray(options) && typeof options === "object" ? Object.values(options) : options

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value })
    }

    const getInputClasses = () => {
        return "form-select" + (error ? " is-invalid" : "")
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
                    className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
            </div>

            {/* {error && <div className="invalid-feedback">{error}</div>} */}
        </div>

        // <div className="mb-4">
        //     <label htmlFor={name} className="form-label">
        //         {label}
        //     </label>
        //     <select className={getInputClasses()} id={name} name={name} value={value} onChange={handleChange}>
        //         <option disabled value="">
        //             {defaultOption}
        //         </option>
        //         {optionsArray &&
        //             optionsArray.map((option) => (
        //                 <option key={option.value} value={option.value}>
        //                     {option.label}
        //                 </option>
        //             ))}
        //     </select>
        //     {error && <div className="invalid-feedback">{error}</div>}
        // </div>
    )
}

export default SelectField
