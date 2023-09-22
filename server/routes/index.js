const express = require("express")
const router = express.Router({ mergeParams: true })

router.use("/account", require("./account.routes"))
router.use("/category", require("./category.routes"))
router.use("/transaction", require("./transaction.routes"))
router.use("/auth", require("./auth.routes"))
router.use("/user", require("./user.routes"))
router.use("/demo", require("./demo.routes"))

module.exports = router
