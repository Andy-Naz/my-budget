const accountsMock = require("../mock/accounts.json")
const categoriesMock = require("../mock/categories.json")
// const transactionsMock = require("../mock/transactions.json")

const Account = require("../models/Account")
const Category = require("../models/Category")
// const Transaction = require("../models/Transaction")

module.exports = async () => {
    const accounts = await Account.find()
    if (accounts.length !== accountsMock.length) {
        await createInitialEntity(Account, accountsMock)
    }

    const categories = await Category.find()
    if (categories.length !== categoriesMock.length) {
        await createInitialEntity(Category, categoriesMock)
    }

    // const transactions = await Transaction.find()
    // if (transactions.length !== transactionsMock.length) {
    //     await createInitialEntity(Transaction, transactionsMock)
    // }
}

async function createInitialEntity(Model, data) {
    await Model.collection.drop()
    return Promise.all(
        data.map(async (item) => {
            try {
                delete item._id
                const newItem = new Model(item)
                await newItem.save()
                return newItem
            } catch (error) {
                return error
            }
        })
    )
}
