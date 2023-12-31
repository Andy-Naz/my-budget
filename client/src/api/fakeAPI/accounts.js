const accounts = [
    { _id: "3fc1944fa486", name: "Наличные" },
    { _id: "c93d25ed8e5a", name: "Банковская карта" },
    { _id: "4525e1012ee0", name: "Операции по вкладу" },
]

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(accounts)
        }, 1000)
    })

const getAccountById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(accounts.find((account) => account._id === id))
        }, 500)
    })

export default {
    fetchAll,
    getAccountById,
}
