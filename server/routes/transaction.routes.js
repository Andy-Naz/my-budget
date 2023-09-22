const express = require("express")
const auth = require("../middleware/auth.middleware")
const Transaction = require("../models/Transaction")
const router = express.Router({ mergeParams: true })

// /api/transaction
router
    .route("/")
    .get(auth, async (req, res) => {
        try {
            const { orderBy, equalTo } = req.query
            const list = await Transaction.find({ [orderBy]: equalTo })
            res.send(list)
        } catch (e) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже"
            })
        }
    })
    .post(auth, async (req, res) => {
        try {
            const newTransaction = await Transaction.create({
                ...req.body,
                userId: req.user._id
            })
            res.status(201).send(newTransaction)
        } catch (e) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже"
            })
        }
    })

router.delete("/:transactionId", auth, async (req, res) => {
    try {
        const { transactionId } = req.params
        const removedTransaction = await Transaction.findById(transactionId)

        if (removedTransaction.userId.toString() === req.user._id) {
            await removedTransaction.deleteOne()
            return res.send(null)
        } else {
            res.status(401).json({ message: "Unauthorized" })
        }
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже"
        })
    }
})

module.exports = router
