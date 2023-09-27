import React, { useState } from "react"
import {
    ChartBarIcon,
    ArrowLongUpIcon,
    ArrowLongDownIcon,
    ArrowDownOnSquareIcon,
    ArrowUpOnSquareIcon,
    CircleStackIcon,
    ChevronDownIcon,
} from "@heroicons/react/24/outline"
import ChartOne from "./dashboard/ChartOne"
import ChartTwo from "./dashboard/ChartTwo"

const Dashboard = ({ chart }) => {
    const chartYears = chart.map((item) => {
        return item.year
    })

    const sortedYears = chartYears.sort((a, b) => b - a)
    const stringYears = sortedYears.map((item) => {
        return String(item)
    })

    const [currentYear, setCurrentYear] = useState({ year: stringYears[0] })

    const data = chart.find((item) => item.year === Number(currentYear.year))

    const handleChange = ({ target }) => {
        setCurrentYear((prevState) => ({ ...prevState, [target.name]: target.value }))
    }

    return (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden mt-4">
            <div className="relative bg-slate-100 w-full">
                <div className="relative pt-12 pb-32 bg-indigo-400">
                    <div className="px-4 md:px-6 mx-auto w-full">
                        <div className="flex justify-end relative z-20 pb-4">
                            <select
                                name="year"
                                id="year"
                                onChange={handleChange}
                                className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
                            >
                                {stringYears.map((option) => (
                                    <option key={option + "_year"} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                            <ChevronDownIcon className="w-4 -ml-6" />
                        </div>
                        <div>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                                        <div className="flex-auto p-4">
                                            <div className="flex flex-wrap">
                                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                                    <h5 className="text-slate-400 uppercase font-bold text-xs">
                                                        Баланс
                                                    </h5>
                                                    <span className="font-bold text-xl">
                                                        {data.card.balance.total.toLocaleString()}
                                                    </span>
                                                </div>
                                                <div className="relative w-auto pl-4 flex-initial">
                                                    <div className="text-white p-3 text-center inline-flex items-center justify-center shadow-lg rounded-full bg-slate-500">
                                                        <CircleStackIcon className="h-6" />
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-sm text-slate-500 mt-4">
                                                <span
                                                    className={
                                                        data.card.balance.deviation >= 0
                                                            ? "text-green-500 mr-2"
                                                            : "text-red-500 mr-2"
                                                    }
                                                >
                                                    {data.card.balance.deviation}%
                                                    {data.card.balance.deviation >= 0 ? (
                                                        <ArrowLongUpIcon className="h-4 inline-flex" />
                                                    ) : (
                                                        <ArrowLongDownIcon className="h-4 inline-flex" />
                                                    )}
                                                </span>
                                                <span className="whitespace-nowrap">к прошлому месяцу</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                                        <div className="flex-auto p-4">
                                            <div className="flex flex-wrap">
                                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                                    <h5 className="text-slate-400 uppercase font-bold text-xs">
                                                        Доходы
                                                    </h5>
                                                    <span className="font-bold text-xl">
                                                        {data.card.income.total.toLocaleString()}
                                                    </span>
                                                </div>
                                                <div className="relative w-auto pl-4 flex-initial">
                                                    <div className="text-white p-3 text-center inline-flex items-center justify-center shadow-lg rounded-full bg-green-500 ">
                                                        <ArrowDownOnSquareIcon className="h-6" />
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-sm text-slate-500 mt-4">
                                                <span
                                                    className={
                                                        data.card.income.deviation >= 0
                                                            ? "text-green-500 mr-2"
                                                            : "text-red-500 mr-2"
                                                    }
                                                >
                                                    {data.card.income.deviation}%
                                                    {data.card.income.deviation >= 0 ? (
                                                        <ArrowLongUpIcon className="h-4 inline-flex" />
                                                    ) : (
                                                        <ArrowLongDownIcon className="h-4 inline-flex" />
                                                    )}
                                                </span>
                                                <span className="whitespace-nowrap">к прошлому месяцу</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                                        <div className="flex-auto p-4">
                                            <div className="flex flex-wrap">
                                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                                    <h5 className="text-slate-400 uppercase font-bold text-xs">
                                                        Расходы
                                                    </h5>
                                                    <span className="font-bold text-xl">
                                                        {data.card.cost.total.toLocaleString()}
                                                    </span>
                                                </div>
                                                <div className="relative w-auto pl-4 flex-initial">
                                                    <div className="text-white p-3 text-center inline-flex items-center justify-center shadow-lg rounded-full bg-red-500">
                                                        <ArrowUpOnSquareIcon className="h-6" />
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-sm text-slate-500 mt-4">
                                                <span
                                                    className={
                                                        data.card.cost.deviation >= 0
                                                            ? "text-green-500 mr-2"
                                                            : "text-red-500 mr-2"
                                                    }
                                                >
                                                    {data.card.cost.deviation}%
                                                    {data.card.cost.deviation >= 0 ? (
                                                        <ArrowLongUpIcon className="h-4 inline-flex" />
                                                    ) : (
                                                        <ArrowLongDownIcon className="h-4 inline-flex" />
                                                    )}
                                                </span>
                                                <span className="whitespace-nowrap">к прошлому месяцу</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                                        <div className="flex-auto p-4">
                                            <div className="flex flex-wrap">
                                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                                    <h5 className="text-slate-400 uppercase font-bold text-xs">
                                                        Рентабельность
                                                    </h5>
                                                    <span className="font-bold text-xl">
                                                        {data.card.profitability.total}%
                                                    </span>
                                                </div>
                                                <div className="relative w-auto pl-4 flex-initial">
                                                    <div className="text-white p-3 text-center inline-flex items-center justify-center shadow-lg rounded-full bg-orange-500">
                                                        <ChartBarIcon className="h-6" />
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-sm text-slate-500 mt-4">
                                                <span
                                                    className={
                                                        data.card.profitability.deviation >= 0
                                                            ? "text-green-500 mr-2"
                                                            : "text-red-500 mr-2"
                                                    }
                                                >
                                                    {data.card.profitability.deviation}%
                                                    {data.card.profitability.deviation >= 0 ? (
                                                        <ArrowLongUpIcon className="h-4 inline-flex" />
                                                    ) : (
                                                        <ArrowLongDownIcon className="h-4 inline-flex" />
                                                    )}
                                                </span>
                                                <span className="whitespace-nowrap">к прошлому месяцу</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-4 md:px-6 mx-auto w-full -mt-24">
                    <div className="flex flex-wrap">
                        <div className="w-full xl:w-8/12 px-4">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg bg-slate-600">
                                <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                                    <div className="flex flex-wrap items-center">
                                        <div className="relative w-full max-w-full flex-grow flex-1">
                                            <h6 className="uppercase mb-1 text-xs font-semibold text-white">Обзор</h6>
                                            <h2 className="text-xl font-semibold text-white mb-2">Денежные потоки</h2>
                                            <ChartOne chart={data} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full xl:w-4/12 px-4">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg bg-white">
                                <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                                    <div className="flex flex-wrap items-center">
                                        <div className="relative w-full max-w-full flex-grow flex-1">
                                            <h6 className="uppercase mb-1 text-xs font-semibold text-slate-500">
                                                Счета
                                            </h6>
                                            <h2 className="text-xl font-semibold text-slate-800">
                                                Распределение долей
                                            </h2>
                                            <ChartTwo chart={data} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
