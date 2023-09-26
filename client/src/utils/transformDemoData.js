export function transformDemoData(transactions, accounts, categories) {
    const normalizeTransaction = transactions.map((transaction) => {
        const accountId = accounts.find((account) => account.name === transaction.account)["_id"]
        const categoryId = categories.find((category) => category.name === transaction.category)["_id"]

        return { ...transaction, account: accountId, category: categoryId }
    })
    return normalizeTransaction
}
