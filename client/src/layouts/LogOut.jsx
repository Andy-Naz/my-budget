import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Navigate } from "react-router-dom"
import { logOut } from "../store/users.js"
import { clearTransaction } from "../store/transactions.js"

function LogOut() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(logOut())
        dispatch(clearTransaction())
    }, [])

    return <Navigate to="/" />
}

export default LogOut
