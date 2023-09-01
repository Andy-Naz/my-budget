import { createAction, createSlice } from "@reduxjs/toolkit"
import transactionService from "../services/transaction.service"
import { nanoid } from "nanoid"

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
        transactionCreated: (state, action) => {
            state.entities.push(action.payload)
        },
        transactionRemoved: (state, action) => {
            state.entities = state.entities.filter((transaction) => transaction._id !== action.payload)
        },
    },
})

const transactionCreateRequested = createAction("transactions/transactionCreateRequested")
const transactionCreateFailed = createAction("transactions/transactionCreateFailed")
const transactionRemoveFailed = createAction("transactions/transactionRemoveFailed")

const { reducer: transactionsReducer, actions } = transactionsSlice
const {
    transactionsRequested,
    transactionsReceived,
    transactionsRequestFailed,
    transactionCreated,
    transactionRemoved,
} = actions

export const loadTransactionsList = () => async (dispatch) => {
    dispatch(transactionsRequested())
    try {
        const { content } = await transactionService.getTransaction()
        dispatch(transactionsReceived(content))
    } catch (error) {
        dispatch(transactionsRequestFailed(error.message))
    }
}

export const createTransaction = (data) => async (dispatch) => {
    dispatch(transactionCreateRequested())
    // const currentUserId = localStorageService.getUserId()
    const transaction = {
        ...data,
        _id: nanoid(),
        // created_at: Date.now(),
    }
    try {
        const { content } = await transactionService.createTransaction(transaction)
        dispatch(transactionCreated(content))
    } catch (error) {
        dispatch(transactionCreateFailed(error.message))
    }
}

export const removeTransaction = (id) => async (dispatch) => {
    try {
        const { content } = await transactionService.removeTransaction(id)
        if (content === null) {
            dispatch(transactionRemoved(id))
        }
    } catch (error) {
        dispatch(transactionRemoveFailed(error.message))
    }
}

export const getTransactions = () => (state) => state.transactions.entities
export const getTransactionsLoadingStatus = () => (state) => state.transactions.isLoading

export default transactionsReducer
