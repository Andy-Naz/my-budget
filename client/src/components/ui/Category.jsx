import React from "react"
import { useSelector } from "react-redux"
import { getCategories, getCategoriesLoadingStatus } from "../../store/categories"

const Category = ({ data }) => {
    const categories = useSelector(getCategories())
    const categoriesLoading = useSelector(getCategoriesLoadingStatus())

    if (!categoriesLoading) {
        const categoryName = categories.find((category) => category._id === data.category)["name"]

        return <p>{categoryName}</p>
    }
}

export default Category
