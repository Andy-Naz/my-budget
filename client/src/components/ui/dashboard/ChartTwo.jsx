import React, { useState } from "react"
import Chart from "react-apexcharts"
import { ChevronDownIcon } from "@heroicons/react/24/outline"

const ChartTwo = ({ chart }) => {
    const [data, setData] = useState({ category: "income" })

    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }))
    }

    const options = {
        chart: {
            type: "donut",
        },
        colors: ["#10B981", "#375E83", "#259AE6", "#FFA70B"],
        labels: chart.donut.labels,
        legend: {
            show: true,
            position: "bottom",
        },

        plotOptions: {
            pie: {
                donut: {
                    size: "65%",
                    background: "transparent",
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        responsive: [
            {
                breakpoint: 2600,
                options: {
                    chart: {
                        width: 380,
                    },
                },
            },
            {
                breakpoint: 640,
                options: {
                    chart: {
                        width: 200,
                    },
                },
            },
        ],
    }

    const series = data.category === "income" ? chart.donut.data.income : chart.donut.data.cost

    return (
        <div className="col-span-12 rounded-sm  bg-white px-4 py-3 shadow-default sm:px-7.5 xl:col-span-5">
            <div className="mb-4 justify-end gap-4 sm:flex">
                <div>
                    <div className="flex relative z-20">
                        <select
                            name="category"
                            id="category"
                            onChange={handleChange}
                            className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
                        >
                            <option value="income">Доходы</option>
                            <option value="cost">Расходы</option>
                        </select>
                        <ChevronDownIcon className="w-4 -ml-6" />
                    </div>
                </div>
            </div>

            <div className="mb-2">
                <div id="chartThree" className="mx-auto flex justify-center pb-6">
                    <Chart options={options} series={series} type="donut" />
                </div>
            </div>
        </div>
    )
}

export default ChartTwo
