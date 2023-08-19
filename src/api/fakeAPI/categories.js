const categories = [
    { _id: "ec11fd44684a", name: "Доход" },
    { _id: "5310f6f217c1", name: "Расход" },
]

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(categories)
        }, 1000)
    })

const getCategoryById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(categories.find((category) => category._id === id))
        }, 500)
    })

export default {
    fetchAll,
    getCategoryById,
}
