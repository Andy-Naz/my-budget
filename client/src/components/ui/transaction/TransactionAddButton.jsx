import React from "react"
import { Link } from "react-router-dom"

const TransactionAddButton = () => {
    return (
        <Link to="/transaction">
            <button className="hidden sm:block flex mr-2 w-24 h-8 justify-center rounded-md bg-indigo-600 p-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                + Создать
            </button>
            <button className="sm:hidden flex mr-2 w-8 h-8 justify-center rounded-md bg-indigo-600 p-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                +
            </button>
        </Link>
    )
}

export default TransactionAddButton
