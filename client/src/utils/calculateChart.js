export function calculateChart(transactions, categories, accounts) {
    const years = []
    transactions.forEach((transaction) => {
        const [year, month, day] = transaction.date.split("-")
        if (!years.includes(Number(year))) {
            years.push(Number(year))
        }
    })

    const dateNow = new Date()
    const currentYear = dateNow.getFullYear()
    let currentMonth = dateNow.getMonth() + 1
    if (currentMonth < 10) {
        currentMonth = `0${currentMonth}`
    } else {
        currentMonth = String(currentMonth)
    }

    const months = [
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

    if (transactions.length !== 0) {
        const chartsData = years.map((year) => {
            const monthlyIncome = []
            const monthlyCost = []
            const xaxisData = []

            const trendIncome = []
            const trendCost = []

            const filteredTransactions = transactions.filter((item) => {
                const [y, m, d] = item.date.split("-")
                return y === String(year)
            })

            // area chart
            months.forEach((month) => {
                const incomeTransactions = filteredTransactions.filter((item) => {
                    return item.category === incomeId
                })

                const costTransactions = filteredTransactions.filter((item) => {
                    return item.category === costId
                })

                const monthlyIncomeTransactions = incomeTransactions.filter((item) => {
                    const [y, m, d] = item.date.split("-")
                    return m === month.num
                })

                const monthlyCostTransactions = costTransactions.filter((item) => {
                    const [y, m, d] = item.date.split("-")
                    return m === month.num
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

                if (Number(currentMonth) === Number(month.num) + 1) {
                    trendIncome.push(incomeTotal)
                    trendCost.push(costTotal)
                } else if (currentMonth === month.num) {
                    trendIncome.push(incomeTotal)
                    trendCost.push(costTotal)
                }

                xaxisData.push(month.name)
            })

            // calculate total
            const incomeTotal = monthlyIncome.reduce((acc, income) => {
                return (acc += income)
            }, 0)
            const costTotal = monthlyCost.reduce((acc, cost) => {
                return (acc += cost)
            }, 0)
            const balanceTotal = incomeTotal - costTotal
            const profitabilityTotal = ((balanceTotal / incomeTotal) * 100).toFixed(1)

            // calculate deviation
            const incomeDeviation = trendIncome[0] !== 0 ? ((trendIncome[1] / trendIncome[0] - 1) * 100).toFixed(1) : 0
            const costDeviation = trendCost[0] !== 0 ? ((trendCost[1] / trendCost[0] - 1) * 100).toFixed(1) : 0
            const balanceDeviation =
                trendIncome[0] - trendCost[0] !== 0
                    ? (((trendIncome[1] - trendCost[1]) / (trendIncome[0] - trendCost[0]) - 1) * 100).toFixed(1)
                    : 0
            const profitabilityDeviation =
                trendIncome[1] === trendCost[1] || trendIncome[0] === trendCost[0]
                    ? 0
                    : (
                          trendIncome[1] / (trendIncome[1] - trendCost[1]) -
                          trendIncome[0] / (trendIncome[0] - trendCost[0])
                      ).toFixed(1)

            const maximumAmount = Math.floor(Math.max(...monthlyIncome, ...monthlyCost) * 1.2)

            //donut chart
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
                year: year,
                card: {
                    balance: {
                        total: balanceTotal,
                        deviation: balanceDeviation,
                    },
                    income: {
                        total: incomeTotal,
                        deviation: incomeDeviation,
                    },
                    cost: {
                        total: costTotal,
                        deviation: costDeviation,
                    },
                    profitability: {
                        total: profitabilityTotal,
                        deviation: profitabilityDeviation,
                    },
                },
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
            }
        })

        return chartsData
    } else {
        return [
            {
                year: currentYear,
                card: {
                    balance: {
                        total: 0,
                        deviation: 0,
                    },
                    income: {
                        total: 0,
                        deviation: 0,
                    },
                    cost: {
                        total: 0,
                        deviation: 0,
                    },
                    profitability: {
                        total: 0,
                        deviation: 0,
                    },
                },
                area: {
                    xaxis: [],
                    values: {
                        income: { name: "Доходы", data: [] },
                        cost: { name: "Расходы", data: [] },
                    },
                    max: 100,
                },
                donut: {
                    labels: [],
                    data: {
                        income: [],
                        cost: [],
                    },
                },
            },
        ]
    }
}
