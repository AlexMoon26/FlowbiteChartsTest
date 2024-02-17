import Chart from "react-apexcharts";
import { options, series } from "@/app/config/ChartConfig";

export const AreaChart = ({ users }) => {
  return <Chart options={options} series={series(users)} type="area" />;
};
