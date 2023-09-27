import React from "react"
import { Outlet } from "react-router-dom"

function AuthLayout() {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center p-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout
