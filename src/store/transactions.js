import { createSlice } from "@reduxjs/toolkit"
import transactionService from "../services/transaction.service"

const transactionsSlice = createSlice({
    name: "transactions",
    initialState: {
        entities: [],
        isLoading: true,
        error: null,
    },
    reducers: {
        transactionsRequested: (state) => {
            state.isLoading = true
        },
        transactionsReceived: (state, action) => {
            state.entities = action.payload
            state.isLoading = false
        },
        transactionsRequestFailed: (state, action) => {
            state.entities = action.payload
            state.isLoading = false
        },
    },
})

const { reducer: transactionsReducer, actions } = transactionsSlice
const { transactionsRequested, transactionsReceived, transactionsRequestFailed } = actions

export const loadTransactionsList = () => async (dispatch) => {
    dispatch(transactionsRequested())
    try {
        const { content } = await transactionService.get()
        dispatch(transactionsReceived(content))
    } catch (error) {
        dispatch(transactionsRequestFailed(error.message))
    }
}

export const getTransactions = () => (state) => state.transactions.entities
export const getTransactionsLoadingStatus = () => (state) => state.transactions.isLoading

export default transactionsReducer
