import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import numeral from "numeral";
import dynamic from "next/dynamic";
import { LoaderChart } from "@/app/components/Loaders";

const DynamicChartComponent = dynamic(
  () => import("@/app/components/Charts/area-chart"),
  {
    ssr: false,
    loading: () => <LoaderChart />,
  }
);

export const CardAreaChart = ({ users }) => {
  let summ = 0;
  users.map((user) => (summ += user));
  const numeralSumm = numeral(summ).format("0a");

  const firstValue = users[0];
  const lastValue = users[users.length - 1];

  const difference = lastValue - firstValue;
  const percent = (difference / firstValue) * 100;

  return (
    <div className="flex flex-col w-[75vw] bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between ">
        <div className="w-full md:w-auto md:flex-shrink-0 md:mr-4">
          <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
            {numeralSumm}
          </h5>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Пользователей за неделю
          </p>
        </div>
        {percent !== null ? (
          <div className="flex items-center mt-4 md:mt-0">
            <div
              className={`px-2.5 py-0.5  text-base font-semibold text-${
                percent > 0 ? "green" : "red"
              }-500 dark:text-${percent > 0 ? "green" : "red"}-500 text-center`}
            >
              {percent.toFixed(1)}%
            </div>
            <div className="ml-2">
              {percent > 0 ? (
                <FaArrowUp className="text-green-500 dark:text-green-500" />
              ) : (
                <FaArrowDown className="text-red-500 dark:text-red-500" />
              )}
            </div>
          </div>
        ) : null}
      </div>
      <DynamicChartComponent users={users} />
    </div>
  );
};
