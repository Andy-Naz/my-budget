export function calculateChart(transactions, categories) {
    const rows = [
        { num: "01", name: "Янв" },
        { num: "02", name: "Фев" },
        { num: "03", name: "Мар" },
        { num: "04", name: "Апр" },
        { num: "05", name: "Май" },
        { num: "06", name: "Июн" },
        { num: "07", name: "Июл" },
        { num: "08", name: "Авг" },
        { num: "09", name: "Сен" },
        { num: "10", name: "Окт" },
        { num: "11", name: "Ноя" },
        { num: "12", name: "Дек" },
    ]

    const incomeId = categories.find((item) => item.name === "Доходы")["_id"]
    const costId = categories.find((item) => item.name === "Расходы")["_id"]

    const monthlyIncome = []
    const monthlyCost = []
    let xaxisData = []

    rows.forEach((row) => {
        const incomeTransactions = transactions.filter((item) => {
            return item.category === incomeId
        })

        const costTransactions = transactions.filter((item) => {
            return item.category === costId
        })

        const monthlyIncomeTransactions = incomeTransactions.filter((item) => {
            const [year, month, day] = item.date.split("-")
            return month === row.num
        })

        const monthlyCostTransactions = costTransactions.filter((item) => {
            const [year, month, day] = item.date.split("-")
            return month === row.num
        })

        let incomeTotal
        if (monthlyIncomeTransactions.length !== 0) {
            incomeTotal = monthlyIncomeTransactions.reduce((acc, item) => {
                return (acc += item.amount)
            }, 0)
        } else incomeTotal = 0

        monthlyIncome.push(incomeTotal)

        let costTotal
        if (monthlyCostTransactions.length !== 0) {
            costTotal = monthlyCostTransactions.reduce((acc, item) => {
                return (acc += item.amount)
            }, 0)
        } else costTotal = 0

        monthlyCost.push(costTotal)

        xaxisData.push(row.name)
    })

    return {
        xaxis: xaxisData,
        values: {
            income: { name: "Доходы", data: monthlyIncome },
            cost: { name: "Расходы", data: monthlyCost },
        },
    }
}
