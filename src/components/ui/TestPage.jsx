import React, { useState } from "react"
import TestFilter from "./TestFilter"

const TestPage = () => {
    const [products, setProducts] = useState([
        { id: 1, name: "Product 1", category: "Electronics", group: "Man" },
        { id: 2, name: "Product 2", category: "Clothing", group: "Man" },
        { id: 3, name: "Product 3", category: "Electronics", group: "Woman" },
        { id: 4, name: "Product 4", category: "Furniture", group: "Woman" },
        { id: 5, name: "Product 5", category: "Clothing", group: "Woman" },
    ])

    const [filteredProducts, setFilteredProducts] = useState(products)

    const categories = ["Electronics", "Clothing", "Furniture"]
    const groups = ["Man", "Woman"]

    const handleFilter = (selectedCategories, selectedRadioGroup) => {
        if (selectedCategories.length === 0 && !selectedRadioGroup) {
            setFilteredProducts(products)
        } else {
            const updatedFilteredProducts = products
                .filter((product) => selectedCategories.includes(product.category))
                .filter((product) => selectedRadioGroup === product.group)
            setFilteredProducts(updatedFilteredProducts)
        }
    }

    return (
        <div>
            <h1>Online Store</h1>
            <TestFilter categories={categories} groups={groups} onFilter={handleFilter} />

            <h2>Filtered Products</h2>
            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id}>
                        {product.name} - {product.category}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TestPage
