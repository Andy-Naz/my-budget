export function calculateChart(transactions, categories, accounts) {
    const years = []

    transactions.forEach((transaction) => {
        const [year, month, day] = transaction.date.split("-")
        if (!years.includes(Number(year))) {
            years.push(Number(year))
        }
    })

    console.log(years)

    const dateNow = new Date()
    let currentMonth = dateNow.getMonth() + 1

    if (currentMonth < 10) {
        currentMonth = `0${currentMonth}`
    } else {
        currentMonth = String(currentMonth)
    }

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
    const xaxisData = []

    const trendIncome = []
    const trendCost = []

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

        if (Number(currentMonth) === Number(row.num) - 1) {
            trendIncome.push(incomeTotal)
            trendCost.push(costTotal)
        } else if (currentMonth === row.num) {
            trendIncome.push(incomeTotal)
            trendCost.push(costTotal)
        }

        xaxisData.push(row.name)
    })

    const deviationIncome = trendIncome[0] !== 0 ? ((trendIncome[1] / trendIncome[0] - 1) * 100).toFixed(2) : 0
    const deviationCost = trendCost[0] !== 0 ? ((trendCost[1] / trendCost[0] - 1) * 100).toFixed(2) : 0
    const deviationBalance =
        trendIncome[0] - trendCost[0] !== 0
            ? (((trendIncome[1] - trendCost[1]) / (trendIncome[0] - trendCost[0]) - 1) * 100).toFixed(2)
            : 0
    const deviationProfitability =
        trendIncome[1] === trendCost[1] || trendIncome[0] === trendCost[0]
            ? 0
            : (
                  trendIncome[1] / (trendIncome[1] - trendCost[1]) -
                  trendIncome[0] / (trendIncome[0] - trendCost[0])
              ).toFixed(2)

    const maximumAmount = Math.floor((Math.max(...monthlyIncome, ...monthlyCost) * 1.2) / 10000) * 10000

    const donutLabels = []
    const donutIncomeData = []
    const donutCostData = []

    accounts.forEach((account) => {
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

        donutLabels.push(account.name)
        donutIncomeData.push(incomeTotal)
        donutCostData.push(costTotal)
    })

    return {
        area: {
            xaxis: xaxisData,
            values: {
                income: { name: "Доходы", data: monthlyIncome },
                cost: { name: "Расходы", data: monthlyCost },
            },
            max: maximumAmount,
        },
        donut: {
            labels: donutLabels,
            data: {
                income: donutIncomeData,
                cost: donutCostData,
            },
        },
        deviation: {
            balance: deviationBalance,
            income: deviationIncome,
            cost: deviationCost,
            profitability: deviationProfitability,
        },
    }
}
