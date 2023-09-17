import React, { useState } from "react"

const TestFilter = ({ categories, groups, onFilter }) => {
    const [selectedCategories, setSelectedCategories] = useState([])
    const [selectedRadioGroup, setSelectedRadioGroup] = useState("")

    const handleCheckboxChange = (category) => {
        const updatedCategories = selectedCategories.includes(category)
            ? selectedCategories.filter((c) => c !== category)
            : [...selectedCategories, category]
        setSelectedCategories(updatedCategories)
    }

    const handleRadioChange = (group) => {
        setSelectedRadioGroup(group)
    }

    const applyFilters = () => {
        onFilter(selectedCategories, selectedRadioGroup)
    }

    const clearFilters = () => {
        setSelectedCategories([])
        setSelectedRadioGroup("")
        onFilter([]) // Notify the parent component to clear filters
    }

    return (
        <div>
            <h2>Filter by Category</h2>
            <div>
                <label>Checkbox Options:</label>
                {categories.map((category) => (
                    <div key={category}>
                        <input
                            type="checkbox"
                            id={category}
                            value={category}
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCheckboxChange(category)}
                        />
                        <label htmlFor={category}>{category}</label>
                    </div>
                ))}
            </div>
            <div>
                <label>Radio Options:</label>
                {groups.map((group) => (
                    <div key={group}>
                        <input
                            type="radio"
                            id={group + "-radio"}
                            value={group}
                            checked={selectedRadioGroup === group}
                            onChange={() => handleRadioChange(group)}
                        />
                        <label htmlFor={group + "-radio"}>{group}</label>
                    </div>
                ))}
            </div>
            <button onClick={applyFilters}>Apply Filters</button>
            <button onClick={clearFilters}>Clear Filters</button>
        </div>
    )
}

export default TestFilter
