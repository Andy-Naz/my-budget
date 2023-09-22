const express = require("express")
const router = express.Router({ mergeParams: true })
const Demo = require("../models/Demo")

// /api/demo
router.get("/", async (req, res) => {
    try {
        const demo = await Demo.find()
        res.send(demo)
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        })
    }
})

module.exports = router
