import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCurrentUserId, getIsLoggedIn, getUsersLoadingStatus, loadUsersList } from "../../../store/users"
import { loadTransactionsDemoList, loadTransactionsList } from "../../../store/transactions"
import { getAccounts, getAccountsLoadingStatus, loadAccountsList } from "../../../store/accounts"
import { getCategories, getCategoriesLoadingStatus, loadCategoriesList } from "../../../store/categories"
import Loading from "../../common/loading/Loading"

const AppLoader = ({ children }) => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(getIsLoggedIn())
    const usersStatusLoading = useSelector(getUsersLoadingStatus())
    const currentUserId = useSelector(getCurrentUserId())

    useEffect(() => {
        dispatch(loadAccountsList())
        dispatch(loadCategoriesList())
        if (isLoggedIn) {
            dispatch(loadUsersList())
        }
    }, [isLoggedIn])

    const accounts = useSelector(getAccounts())
    const categories = useSelector(getCategories())

    const accountsLoading = useSelector(getAccountsLoadingStatus())
    const categoriesLoading = useSelector(getCategoriesLoadingStatus())

    useEffect(() => {
        if (currentUserId) {
            dispatch(loadTransactionsList(currentUserId))
        } else if (!accountsLoading && !categoriesLoading) {
            dispatch(loadTransactionsDemoList(accounts, categories))
        }
    }, [currentUserId, accountsLoading, categoriesLoading])

    if (usersStatusLoading) return <Loading />
    return children
}

export default AppLoader
