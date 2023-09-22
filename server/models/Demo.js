const { Schema, model } = require("mongoose")

const schema = new Schema(
    {
        category: { type: String, required: true },
        account: { type: String, required: true },
        amount: { type: Number, required: true },
        comment: { type: String, required: true },
        type: { type: String, required: true },
    },
    {
        timestamps: { createdAt: "created_at" },
    }
)

module.exports = model("Demo", schema)
