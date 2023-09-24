import React, { useState } from "react"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"

const TextField = ({ label, type, name, value, onChange, error }) => {
    const [showPassword, setShowPassword] = useState(false)

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value })
    }

    const getInputClasses = () => {
        return "form-control" + (error ? " is-invalid" : "")
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
                {type === "password" && (
                    <div className="text-sm">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Забыли пароль?
                        </a>
                    </div>
                )}
            </div>
            <div className="mt-2 relative flex">
                <input
                    id={name}
                    name={name}
                    type={showPassword ? "text" : type}
                    value={value}
                    onChange={handleChange}
                    className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {type === "password" && (
                    <button className="w-8 h-8 text-slate-500 right-0 inset-y-0 absolute mr-2 mt-1 p-1" type="button" onClick={toggleShowPassword}>
                        {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
                    </button>
                )}
            </div>
        </div>

        // <div className="mb-4">
        //     <label htmlFor={name}>{label}</label>
        //     <div className="input-group has-validation">
        //         <input
        //             type={showPassword ? "text" : type}
        //             id={name}
        //             name={name}
        //             value={value}
        //             onChange={handleChange}
        //             className={getInputClasses()}
        //         />
        //         {type === "password" && (
        //             <button className="btn btn-outline-secondary" type="button" onClick={toggleShowPassword}>
        //                 <i className={"bi bi-eye" + (showPassword ? "-slash" : "")}></i>
        //             </button>
        //         )}
        //         {error && <div className="invalid-feedback">{error}</div>}
        //     </div>
        // </div>
    )
}

TextField.default = {
    type: "text",
}

export default TextField
