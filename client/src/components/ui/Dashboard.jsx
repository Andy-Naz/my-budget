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
                                                <span className="text-emerald-500 mr-2">
                                                    3.48%
                                                    <ArrowLongUpIcon className="h-4 inline-flex" />
                                                </span>
                                                <span className="whitespace-nowrap">С прошлым месяцем</span>
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
                                                <span className="text-red-500 mr-2">
                                                    3.48% <ArrowLongDownIcon className="h-4 inline-flex" />
                                                </span>
                                                <span className="whitespace-nowrap">Since last week</span>
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
                                                <span className="text-orange-500 mr-2">
                                                    <i className="fas fa-arrow-down"></i> 1.10%
                                                </span>
                                                <span className="whitespace-nowrap">Since yesterday</span>
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
                                                <span className="text-emerald-500 mr-2">
                                                    <i className="fas fa-arrow-up"></i> 12%
                                                </span>
                                                <span className="whitespace-nowrap">Since last month</span>
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
                                                Транзакции
                                            </h6>
                                            <h2 className="text-xl font-semibold text-blueGray-800">Общая динамика</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 flex-auto">
                                    <div className="relative h-350-px">
                                        {/* <canvas
                                            width="221"
                                            height="291"
                                            style="display: block; box-sizing: border-box; height: 350px; width: 265.7px;"
                                            id="bar-chart"
                                        ></canvas> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full xl:w-8/12 px-4">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg bg-white text-blueGray-700">
                                <div className="px-6 py-4 border-0">
                                    <div className="flex flex-wrap items-center">
                                        <div className="relative w-full max-w-full flex-grow flex-1">
                                            <h3 className="font-bold text-lg text-blueGray-700">Page visits</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="block w-full overflow-x-auto">
                                    <table className="items-center w-full bg-transparent border-collapse">
                                        <thead>
                                            <tr>
                                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-blueGray-100 text-blueGray-500 border-blueGray-200">
                                                    Page name
                                                </th>
                                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-blueGray-100 text-blueGray-500 border-blueGray-200">
                                                    Visitors
                                                </th>
                                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-blueGray-100 text-blueGray-500 border-blueGray-200">
                                                    Unique Users
                                                </th>
                                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-blueGray-100 text-blueGray-500 border-blueGray-200">
                                                    Bounce Rate
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">
                                                        <span className="ml-3 font-bold NaN">/argon/</span>
                                                    </div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">4,569</div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">340</div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">
                                                        <i className="fas fa-arrow-up mr-2 text-emerald-500"></i>46,53%
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">
                                                        <span className="ml-3 font-bold NaN">/argon/index.html</span>
                                                    </div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">3,985</div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">319</div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">
                                                        <i className="fas fa-arrow-down mr-2 text-orange-500"></i>46,53%
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">
                                                        <span className="ml-3 font-bold NaN">/argon/charts.html</span>
                                                    </div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">3,513</div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">294</div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">
                                                        <i className="fas fa-arrow-down mr-2 text-orange-500"></i>36,49%
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">
                                                        <span className="ml-3 font-bold NaN">/argon/tables.html</span>
                                                    </div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">2,050</div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">147</div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">
                                                        <i className="fas fa-arrow-up mr-2 text-emerald-500"></i>50,87%
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">
                                                        <span className="ml-3 font-bold NaN">/argon/profile.html</span>
                                                    </div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">1,795</div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">190</div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">
                                                        <i className="fas fa-arrow-up mr-2 text-red-500"></i>46,53%
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="w-full xl:w-4/12 px-4">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg bg-white text-blueGray-700">
                                <div className="px-6 py-4 border-0">
                                    <div className="flex flex-wrap items-center">
                                        <div className="relative w-full max-w-full flex-grow flex-1">
                                            <h3 className="font-bold text-lg text-blueGray-700">Social traffic</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="block w-full overflow-x-auto">
                                    <table className="items-center w-full bg-transparent border-collapse">
                                        <thead>
                                            <tr>
                                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-blueGray-100 text-blueGray-500 border-blueGray-200">
                                                    Referral
                                                </th>
                                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-blueGray-100 text-blueGray-500 border-blueGray-200">
                                                    Visitors
                                                </th>
                                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-blueGray-100 text-blueGray-500 border-blueGray-200"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">
                                                        <span className="ml-3 font-bold NaN">Facebook</span>
                                                    </div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">1,480</div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 min-w-140-px">
                                                    <div className="flex items-center">
                                                        <span className="mr-2">60%</span>
                                                        <div className="relative w-full">
                                                            <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                                                <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500 w-60"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">
                                                        <span className="ml-3 font-bold NaN">Facebook</span>
                                                    </div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">5,480</div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 min-w-140-px">
                                                    <div className="flex items-center">
                                                        <span className="mr-2">70%</span>
                                                        <div className="relative w-full">
                                                            <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                                                                <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500 w-70"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">
                                                        <span className="ml-3 font-bold NaN">Google</span>
                                                    </div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">4,807</div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 min-w-140-px">
                                                    <div className="flex items-center">
                                                        <span className="mr-2">80%</span>
                                                        <div className="relative w-full">
                                                            <div className="overflow-hidden h-2 text-xs flex rounded bg-indigo-200">
                                                                <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500 w-80"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">
                                                        <span className="ml-3 font-bold NaN">Instagram</span>
                                                    </div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">3,678</div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 min-w-140-px">
                                                    <div className="flex items-center">
                                                        <span className="mr-2">75%</span>
                                                        <div className="relative w-full">
                                                            <div className="overflow-hidden h-2 text-xs flex rounded bg-lightBlue-200">
                                                                <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-lightBlue-500 w-75"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">
                                                        <span className="ml-3 font-bold NaN">Twitter</span>
                                                    </div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">2,645 </div>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 min-w-140-px">
                                                    <div className="flex items-center">
                                                        <span className="mr-2">30%</span>
                                                        <div className="relative w-full">
                                                            <div className="overflow-hidden h-2 text-xs flex rounded bg-amber-200">
                                                                <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-amber-500 w-30"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
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
