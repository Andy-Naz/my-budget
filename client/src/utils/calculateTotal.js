export function calculateTotal(transactions, categories) {
    const incomeId = categories.find((item) => item.name === "Доходы")["_id"]
    const costId = categories.find((item) => item.name === "Расходы")["_id"]

    const income = transactions.filter((income) => {
        return income.category === incomeId
    })
    const incomeTotal = income.reduce((acc, income) => {
        return (acc += income.amount)
    }, 0)

    const cost = transactions.filter((cost) => {
        return cost.category === costId
    })
    const costTotal = cost.reduce((acc, cost) => {
        return (acc += cost.amount)
    }, 0)

    const balanceTotal = incomeTotal - costTotal
    const profitRate = ((balanceTotal / incomeTotal) * 100).toFixed(2)
    const calculateTotal = { balance: balanceTotal, income: incomeTotal, cost: costTotal, profitability: profitRate }

    return calculateTotal
}
