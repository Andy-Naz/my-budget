const accountsMock = require("../mock/accounts.json")
const categoriesMock = require("../mock/categories.json")
const demoMock = require("../mock/demo.json")

const Account = require("../models/Account")
const Category = require("../models/Category")
const Demo = require("../models/Demo")

module.exports = async () => {
    const accounts = await Account.find()
    if (accounts.length !== accountsMock.length) {
        await createInitialEntity(Account, accountsMock)
    }

    const categories = await Category.find()
    if (categories.length !== categoriesMock.length) {
        await createInitialEntity(Category, categoriesMock)
    }

    const demo = await Demo.find()
    if (demo.length !== Demo.length) {
        await createInitialEntity(Demo, demoMock)
    }
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
