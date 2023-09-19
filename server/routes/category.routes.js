const express = require("express")
const router = express.Router({ mergeParams: true })
const Category = require("../models/Category")

router.get("/", async (req, res) => {
    try {
        const categories = await Category.find()
        res.status(200).send(categories)
    } catch (error) {
        res.status(500).json({
            message: "На сервере произошла ошибка"
        })
    }
})

module.exports = router
