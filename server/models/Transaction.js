const { Schema, model } = require("mongoose")

const schema = new Schema(
    {
        category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
        account: { type: Schema.Types.ObjectId, ref: "Account", required: true },
        amount: { type: Number, required: true },
        comment: { type: String },
        userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    },
    {
        timestamps: { createdAt: "created_at" },
    }
)

module.exports = model("Transaction", schema)
