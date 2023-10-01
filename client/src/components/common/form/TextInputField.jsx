import React, { useState } from "react"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"

const TextInputField = () => {
    const [showPassword, setShowPassword] = useState(false)

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value })
    }

    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState)
    }

    return (
        <div>
            <div className="flex items-center justify-between">
                <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
                    {label}
                </label>
            </div>
            <div className="mt-2 relative flex">
                <input
                    id={name}
                    name={name}
                    type={showPassword ? "text" : type}
                    value={value}
                    placeholder={placeholder}
                    onChange={handleChange}
                    className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {type === "password" && (
                    <button
                        className="w-8 h-8 text-slate-500 right-0 inset-y-0 absolute mr-2 mt-1 p-1"
                        type="button"
                        onClick={toggleShowPassword}
                    >
                        {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
                    </button>
                )}
                <div className="absolute -bottom-4 right-0 text-xs">
                    {error && <div className="text-red-500">{error}</div>}
                </div>
            </div>
        </div>
    )
}

export default TextInputField
