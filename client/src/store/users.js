import { createAction, createSlice } from "@reduxjs/toolkit"
import userService from "../services/user.service"
import authService from "../services/auth.service"
import localStorageService from "../services/localStorage.service"
import { generateAuthError } from "../utils/generateAuthError"

const initialState = localStorageService.getAccessToken()
    ? {
          entities: null,
          isLoading: true,
          error: null,
          auth: { userId: localStorageService.getUserId() },
          isLoggedIn: true,
          dataLoaded: false,
      }
    : {
          entities: null,
          isLoading: false,
          error: null,
          auth: null,
          isLoggedIn: false,
          dataLoaded: false,
      }

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        usersRequested: (state) => {
            state.isLoading = true
        },
        usersReceived: (state, action) => {
            state.entities = action.payload
            state.dataLoaded = true
            state.isLoading = false
        },
        usersRequestFailed: (state, action) => {
            state.entities = action.payload
            state.isLoading = false
        },
        authRequestSuccess: (state, action) => {
            state.auth = action.payload
            state.isLoggedIn = true
        },
        authRequestFailed: (state, action) => {
            state.error = action.payload
        },
        userCreated: (state, action) => {
            state.entities.push(action.payload)
        },
        userUpdated: (state, action) => {
            state.entities[state.entities.findIndex((u) => u._id === action.payload._id)] = action.payload
        },
        userLoggedOut: (state) => {
            state.entities = null
            state.isLoggedIn = false
            state.auth = null
            state.dataLoaded = false
        },
        authRequested: (state) => {
            state.error = null
        },
    },
})

const { reducer: usersReducer, actions } = usersSlice
const {
    usersRequested,
    usersReceived,
    usersRequestFailed,
    authRequestSuccess,
    authRequestFailed,
    userUpdated,
    userLoggedOut,
} = actions

const authRequested = createAction("users/authRequested")
const userUpdateRequested = createAction("users/userUpdateRequested")
const userUpdateFailed = createAction("users/userUpdateFailed")

export const logIn =
    ({ payload }) =>
    async (dispatch) => {
        const { email, password } = payload
        dispatch(authRequested())
        try {
            const data = await authService.login({ email, password })
            dispatch(authRequestSuccess({ userId: data.userId }))
            localStorageService.setTokens(data)
        } catch (error) {
            const { code, message } = error.response.data.error
            if (code === 400) {
                const errorMessage = generateAuthError(message)
                dispatch(authRequestFailed(errorMessage))
            } else {
                dispatch(authRequestFailed(error.message))
            }
        }
    }

export const singUp = (payload) => async (dispatch) => {
    dispatch(authRequested())
    try {
        const data = await authService.register(payload)
        dispatch(authRequestSuccess({ userId: data.userId }))
        localStorageService.setTokens(data)
    } catch (error) {
        const { code, message } = error.response.data.error
        if (code === 400) {
            const errorMessage = generateAuthError(message)
            dispatch(authRequestFailed(errorMessage))
        } else {
            dispatch(authRequestFailed(error.message))
        }
    }
}

export const logOut = () => (dispatch) => {
    localStorageService.removeAuthData()
    dispatch(userLoggedOut())
}

export function updateUser(payload) {
    return async function (dispatch) {
        dispatch(userUpdateRequested())
        try {
            const { content } = await userService.update(payload)
            dispatch(userUpdated(content))
        } catch (error) {
            dispatch(userUpdateFailed(error.message))
        }
    }
}

export const loadUsersList = () => async (dispatch) => {
    dispatch(usersRequested())
    try {
        const { content } = await userService.get()
        dispatch(usersReceived(content))
    } catch (error) {
        dispatch(usersRequestFailed(error.message))
    }
}

export const getUsersList = () => (state) => state.users.entities
export const getCurrentUserData = () => (state) => {
    return state.users.entities ? state.users.entities.find((u) => u._id === state.users.auth.userId) : null
}
export const getUserById = (userId) => (state) => {
    if (state.users.entities) {
        return state.users.entities.find((u) => u._id === userId)
    }
}

export const getUsers = () => (state) => state.users.entities
export const getUsersLoadingStatus = () => (state) => state.users.isLoading
export const getIsLoggedIn = () => (state) => state.users.isLoggedIn
export const getDataStatus = () => (state) => state.users.dataLoaded
export const getCurrentUserId = () => (state) => state.users.auth?.userId
export const getAuthErrors = () => (state) => state.users.error

export default usersReducer
