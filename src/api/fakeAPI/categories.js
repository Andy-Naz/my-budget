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

export default {
    fetchAll,
}
