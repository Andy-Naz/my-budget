import React from "react"
import Chart from "react-apexcharts"

const ChartOne = ({ chart }) => {
    const options = {
        legend: {
            show: true,
            position: "bottom",
            horizontalAlign: "center",
        },
        colors: ["#3C50E0", "#80CAEE"],
        chart: {
            fontFamily: "Satoshi, sans-serif",
            height: 335,
            type: "area",
            dropShadow: {
                enabled: true,
                color: "#623CEA14",
                top: 10,
                blur: 4,
                left: 0,
                opacity: 0.1,
            },

            toolbar: {
                show: false,
            },
        },
        responsive: [
            {
                breakpoint: 1024,
                options: {
                    chart: {
                        height: 300,
                    },
                },
            },
            {
                breakpoint: 1366,
                options: {
                    chart: {
                        height: 350,
                    },
                },
            },
        ],
        stroke: {
            width: [2, 2],
            curve: "straight",
        },
        // labels: {
        //   show: false,
        //   position: "top",
        // },
        grid: {
            xaxis: {
                lines: {
                    show: true,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        markers: {
            size: 4,
            colors: "#fff",
            strokeColors: ["#3056D3", "#80CAEE"],
            strokeWidth: 3,
            strokeOpacity: 0.9,
            strokeDashArray: 0,
            fillOpacity: 1,
            discrete: [],
            hover: {
                size: undefined,
                sizeOffset: 5,
            },
        },
        xaxis: {
            type: "category",
            categories: chart.area.xaxis,
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            title: {
                style: {
                    fontSize: "0px",
                },
            },
            min: 0,
            max: chart.area.max,
        },
    }

    const series = [
        {
            name: chart.area.values.income.name,
            data: chart.area.values.income.data,
        },

        {
            name: chart.area.values.cost.name,
            data: chart.area.values.cost.data,
        },
    ]

    return (
        <div className="col-span-12 rounded-sm bg-white px-4 py-3 shadow-default xl:col-span-8">
            <div id="chartOne" className="-ml-5">
                <Chart options={options} series={series} type="area" height={350} />
            </div>
        </div>
    )
}

export default ChartOne
