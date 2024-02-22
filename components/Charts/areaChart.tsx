"use client";
import Chart from "react-apexcharts";
import { options, series, type } from "@/config/chartConfig";
import { IUsers } from "@/types";

export default function AreaChart({ users }: IUsers) {
  return <Chart options={options} series={series(users)} type={type} />;
}
