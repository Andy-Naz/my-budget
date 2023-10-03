import React from "react"
import { Link } from "react-router-dom"
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline"
import { useSelector } from "react-redux"
import { getIsLoggedIn } from "../../../store/users"

const DisplayTransactionTools = ({ data, onRemove }) => {
    const isLoggedIn = useSelector(getIsLoggedIn())

    return (
        <div className="flex">
            <div>
                <Link to={`/transaction/${data._id}`}>
                    <PencilIcon className="w-4 hover:text-green-600 mr-2" />
                </Link>
            </div>
            {isLoggedIn && (
                <div>
                    <TrashIcon role="button" className="w-4 hover:text-red-600" onClick={() => onRemove(data._id)} />
                </div>
            )}
        </div>
    )
}

export default DisplayTransactionTools
