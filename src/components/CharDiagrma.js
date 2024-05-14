"use client";

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto"; // Import Chart.js

export default function CardBarChart() {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext("2d");
        const config = {
            type: "bar",
            data: {
                labels: [
                    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"

                ],
                datasets: [
                    {
                        label: new Date().getFullYear(),
                        backgroundColor: "#5a92cb",
                        borderColor: "#5a92cb",
                        data: [30, 320, 56, 34, 120, 45, 123],
                        fill: true,
                        barThickness: 8,
                    },

                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    display: false,
                    text: "Orders Chart",
                },
                tooltips: {
                    mode: "index",
                    intersect: false,
                },
                hover: {
                    mode: "nearest",
                    intersect: true,
                },
                legend: {
                    labels: {
                        fontColor: "white",
                    },
                    align: "end",
                    position: "bottom",
                },
                scales: {
                    xAxes: [
                        {
                            display: false,
                            gridLines: {
                                display: false, // Hide grid lines
                            },
                            ticks: {
                                fontColor: "white", // Set labels to white
                            },
                        },
                    ],
                    yAxes: [
                        {
                            display: true,
                            gridLines: {
                                display: false, // Hide grid lines
                            },
                            ticks: {
                                fontColor: "white", // Set labels to white
                            },
                        },
                    ],
                },
            },
        };

        const myBarChart = new Chart(ctx, config);

        return () => {
            myBarChart.destroy();
        };
    }, []);

    return (
        <div className="relative flex h-[30vh] mt-[7vh] flex-col min-w-0 break-words bg-[#3d3d3d]  mb-6 shadow-lg rounded-xl mx-[10px] p-2">
            {/* <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                <div className="flex flex-wrap items-center">
                    <div className="relative w-full max-w-full flex-grow flex-1">
                        <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                            Performance
                        </h6>
                        <h2 className="text-blueGray-700 text-xl font-semibold">
                            Total orders
                        </h2>
                    </div>
                </div>
            </div> */}
            <div className="p-4 flex-auto">
                {/* Chart */}
                <div className="relative h-350-px">
                    <canvas height='250' ref={chartRef} id="bar-chart"></canvas>
                </div>
            </div>
        </div>
    );
}
