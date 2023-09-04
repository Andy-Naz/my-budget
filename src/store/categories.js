import { createSlice } from "@reduxjs/toolkit"
import categoryService from "../services/category.service"

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
    },
    reducers: {
        categoriesRequested: (state) => {
            state.isLoading = true
        },
        categoriesReceived: (state, action) => {
            state.entities = action.payload
            state.isLoading = false
        },
        categoriesRequestFailed: (state, action) => {
            state.entities = action.payload
            state.isLoading = false
        },
    },
})

const { reducer: categoriesReducer, actions } = categoriesSlice
const { categoriesRequested, categoriesReceived, categoriesRequestFailed } = actions

export const loadCategoriesList = () => async (dispatch) => {
    dispatch(categoriesRequested())
    try {
        const { content } = await categoryService.get()
        dispatch(categoriesReceived(content))
    } catch (error) {
        dispatch(categoriesRequestFailed(error.message))
    }
}

export const getCategories = () => (state) => state.categories.entities
export const getCategoriesLoadingStatus = () => (state) => state.categories.isLoading

export default categoriesReducer
