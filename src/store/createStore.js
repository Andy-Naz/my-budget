import { configureStore, combineReducers } from "@reduxjs/toolkit"
import accountsReducer from "./accounts"
import transactionsReducer from "./transactions"
import categoriesReducer from "./categories"
// import usersReducer from "./users"

const rootReducer = combineReducers({
    accounts: accountsReducer,
    categories: categoriesReducer,
    transactions: transactionsReducer,
    // users: usersReducer,
})

export function createStore() {
    return configureStore({
        reducer: rootReducer,
    })
}
