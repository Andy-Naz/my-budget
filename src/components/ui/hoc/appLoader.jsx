import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCurrentUserId, getIsLoggedIn, getUsersLoadingStatus, loadUsersList } from "../../../store/users"
import { loadTransactionsList } from "../../../store/transactions"
import { loadAccountsList } from "../../../store/accounts"
import { loadCategoriesList } from "../../../store/categories"

const AppLoader = ({ children }) => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(getIsLoggedIn())
    const usersStatusLoading = useSelector(getUsersLoadingStatus())
    const currentUserId = useSelector(getCurrentUserId())
    console.log(currentUserId)

    useEffect(() => {
        dispatch(loadAccountsList())
        dispatch(loadCategoriesList())
        if (isLoggedIn) {
            dispatch(loadUsersList())
            dispatch(loadTransactionsList(currentUserId))
        }
    }, [isLoggedIn, currentUserId])

    if (usersStatusLoading) return "Loading..."
    return children
}

export default AppLoader
