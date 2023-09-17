export function calculate(transactions, accounts, categories) {
    const calculateAccounts = []
    const incomeId = categories.find((item) => item.name === "Доходы")["_id"]
    const costId = categories.find((item) => item.name === "Расходы")["_id"]

    accounts.forEach((account) => {
        if (transactions) {
            const filteredTransactions = transactions.filter((transaction) => {
                return transaction.account === account._id
            })

            const income = filteredTransactions.filter((income) => {
                return income.category === incomeId
            })
            const incomeTotal = income.reduce((acc, income) => {
                return (acc += income.amount)
            }, 0)

            const cost = filteredTransactions.filter((cost) => {
                return cost.category === costId
            })
            const costTotal = cost.reduce((acc, cost) => {
                return (acc += cost.amount)
            }, 0)

            const accountTotal = incomeTotal - costTotal
            const newAccount = { ...account, income: incomeTotal, cost: costTotal, total: accountTotal }
            calculateAccounts.push(newAccount)
        } else {
            const newAccount = { ...account, income: 0, cost: 0, total: 0 }
            calculateAccounts.push(newAccount)
        }
    })
    return calculateAccounts
}
