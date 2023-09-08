import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getIsLoggedIn, getUsersLoadingStatus, loadUsersList } from "../../../store/users"
import { loadTransactionsList } from "../../../store/transactions"
import { loadAccountsList } from "../../../store/accounts"
import { loadCategoriesList } from "../../../store/categories"

const AppLoader = ({ children }) => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(getIsLoggedIn())
    const usersStatusLoading = useSelector(getUsersLoadingStatus())
    useEffect(() => {
        dispatch(loadAccountsList())
        dispatch(loadCategoriesList())
        dispatch(loadTransactionsList())
        if (isLoggedIn) {
            dispatch(loadUsersList())
        }
    }, [])
    if (usersStatusLoading) return "Loading..."
    return children
}

export default AppLoader
