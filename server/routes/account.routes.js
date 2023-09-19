const express = require("express")
const router = express.Router({ mergeParams: true })
const Account = require("../models/Account")

router.get("/", async (req, res) => {
    try {
        const accounts = await Account.find()
        res.status(200).send(accounts)
    } catch (error) {
        res.status(500).json({
            message: "На сервере произошла ошибка"
        })
    }
})

module.exports = router
