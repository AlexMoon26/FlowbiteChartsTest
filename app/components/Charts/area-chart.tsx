"use client";
import Chart from "react-apexcharts";
import { options, series } from "@/app/config/ChartConfig";

const AreaChart = ({ users }) => {
  return <Chart options={options} series={series(users)} type="area" />;
};

export default AreaChart;
