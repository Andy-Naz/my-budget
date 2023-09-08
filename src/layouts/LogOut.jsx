import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Navigate } from "react-router-dom"
import { logOut } from "../store/users.js"

function LogOut() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(logOut())
    }, [])

    return <Navigate to="/" />
}

export default LogOut
