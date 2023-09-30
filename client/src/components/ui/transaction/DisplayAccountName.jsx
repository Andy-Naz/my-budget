import React from "react"
import { useSelector } from "react-redux"
import { getAccounts, getAccountsLoadingStatus } from "../../../store/accounts"

const DisplayAccountName = ({ data }) => {
    const accounts = useSelector(getAccounts())
    const accountsLoading = useSelector(getAccountsLoadingStatus())

    if (!accountsLoading) {
        const accountName = accounts.find((account) => account._id === data.account)["name"]

        return <p>{accountName}</p>
    }
}

export default DisplayAccountName
