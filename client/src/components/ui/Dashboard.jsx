import React from "react"
import {
    ChartBarIcon,
    ArrowLongUpIcon,
    ArrowLongDownIcon,
    ArrowDownOnSquareIcon,
    ArrowUpOnSquareIcon,
    CircleStackIcon,
} from "@heroicons/react/24/outline"
import ChartOne from "./dashboard/ChartOne"
import ChartTwo from "./dashboard/ChartTwo"

const Dashboard = ({ summary, chart }) => {
    return (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden mt-4">
            <div className="relative bg-blueGray-100 w-full">
                <div className="relative pt-16 pb-32 bg-indigo-400">
                    <div className="px-4 md:px-6 mx-auto w-full">
                        <div>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                                        <div className="flex-auto p-4">
                                            <div className="flex flex-wrap">
                                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                                    <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                                                        Баланс
                                                    </h5>
                                                    <span className="font-bold text-xl">
                                                        {summary.balance.toLocaleString()}
                                                    </span>
                                                </div>
                                                <div className="relative w-auto pl-4 flex-initial">
                                                    <div className="text-white p-3 text-center inline-flex items-center justify-center shadow-lg rounded-full bg-slate-500">
                                                        <CircleStackIcon className="h-6" />
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-sm text-blueGray-500 mt-4">
                                                <span
                                                    className={
                                                        chart.deviation.balance >= 0
                                                            ? "text-green-500 mr-2"
                                                            : "text-red-500 mr-2"
                                                    }
                                                >
                                                    {chart.deviation.balance}%
                                                    {chart.deviation.balance >= 0 ? (
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
                                                    <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                                                        Доходы
                                                    </h5>
                                                    <span className="font-bold text-xl">
                                                        {summary.income.toLocaleString()}
                                                    </span>
                                                </div>
                                                <div className="relative w-auto pl-4 flex-initial">
                                                    <div className="text-white p-3 text-center inline-flex items-center justify-center shadow-lg rounded-full bg-green-500 ">
                                                        <ArrowDownOnSquareIcon className="h-6" />
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-sm text-blueGray-500 mt-4">
                                                <span
                                                    className={
                                                        chart.deviation.income >= 0
                                                            ? "text-green-500 mr-2"
                                                            : "text-red-500 mr-2"
                                                    }
                                                >
                                                    {chart.deviation.income}%
                                                    {chart.deviation.income >= 0 ? (
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
                                                    <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                                                        Расходы
                                                    </h5>
                                                    <span className="font-bold text-xl">
                                                        {summary.cost.toLocaleString()}
                                                    </span>
                                                </div>
                                                <div className="relative w-auto pl-4 flex-initial">
                                                    <div className="text-white p-3 text-center inline-flex items-center justify-center shadow-lg rounded-full bg-red-500">
                                                        <ArrowUpOnSquareIcon className="h-6" />
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-sm text-blueGray-500 mt-4">
                                                <span
                                                    className={
                                                        chart.deviation.cost >= 0
                                                            ? "text-green-500 mr-2"
                                                            : "text-red-500 mr-2"
                                                    }
                                                >
                                                    {chart.deviation.cost}%
                                                    {chart.deviation.cost >= 0 ? (
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
                                                    <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                                                        Рентабельность
                                                    </h5>
                                                    <span className="font-bold text-xl">{summary.profitability}%</span>
                                                </div>
                                                <div className="relative w-auto pl-4 flex-initial">
                                                    <div className="text-white p-3 text-center inline-flex items-center justify-center shadow-lg rounded-full bg-orange-500">
                                                        <ChartBarIcon className="h-6" />
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-sm text-blueGray-500 mt-4">
                                                <span
                                                    className={
                                                        chart.deviation.profitability >= 0
                                                            ? "text-green-500 mr-2"
                                                            : "text-red-500 mr-2"
                                                    }
                                                >
                                                    {chart.deviation.profitability}%
                                                    {chart.deviation.profitability >= 0 ? (
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
                                            <ChartOne chart={chart} />
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
                                            <h6 className="uppercase mb-1 text-xs font-semibold text-blueGray-500">
                                                Счета
                                            </h6>
                                            <h2 className="text-xl font-semibold text-blueGray-800">
                                                Распределение долей
                                            </h2>
                                            <ChartTwo chart={chart} />
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
