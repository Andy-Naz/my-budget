import { createSlice } from "@reduxjs/toolkit"
import accountService from "../services/account.service"

const accountsSlice = createSlice({
    name: "accounts",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
    },
    reducers: {
        accountsRequested: (state) => {
            state.isLoading = true
        },
        accountsReceived: (state, action) => {
            state.entities = action.payload
            state.isLoading = false
        },
        accountsRequestFailed: (state, action) => {
            state.entities = action.payload
            state.isLoading = false
        },
    },
})

const { reducer: accountsReducer, actions } = accountsSlice
const { accountsRequested, accountsReceived, accountsRequestFailed } = actions

export const loadAccountsList = () => async (dispatch) => {
    dispatch(accountsRequested())
    try {
        const { content } = await accountService.get()
        dispatch(accountsReceived(content))
    } catch (error) {
        dispatch(accountsRequestFailed(error.message))
    }
}

export const getAccounts = () => (state) => state.accounts.entities
export const getAccountsLoadingStatus = () => (state) => state.accounts.isLoading

export default accountsReducer
