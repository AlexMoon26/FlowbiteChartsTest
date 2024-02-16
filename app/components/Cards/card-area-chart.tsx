"use client";
import React, { useState } from "react";
import { Chart } from "../Charts/area-chart";
import { Dropdown } from "flowbite-react";

export const CardAreaChart = () => {
  const [percent, setPercent] = useState(null);
  const [summ, setSumm] = useState(null);
  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between">
        <div>
          <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
            {summ}
          </h5>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Пользователей за неделю
          </p>
        </div>
        {percent !== null ? (
          <div
            className={`flex items-center px-2.5 py-0.5 text-base font-semibold text-${
              percent > 0 ? "green" : "red"
            }-500 dark:text-${percent > 0 ? "green" : "red"}-500 text-center`}
          >
            {percent.toFixed(1)}%
            <svg
              className="w-3 h-3 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  percent > 0
                    ? "M5 13V1m0 0L1 5m4-4 4 4"
                    : "M5 1V13m0 0l-4-4m4 4l4-4"
                }
              />
            </svg>
          </div>
        ) : null}
      </div>
      <Chart setPercent={setPercent} setSumm={setSumm} />
      <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
        <div className="flex justify-between items-center pt-5">
          <Dropdown label="Диапазон" inline>
            <Dropdown.Item>Последние 7 дней</Dropdown.Item>
            <Dropdown.Item>Последний месяц</Dropdown.Item>
            <Dropdown.Item>Последние 3 месяца</Dropdown.Item>
            <Dropdown.Item>Последний год</Dropdown.Item>
          </Dropdown>
          <a
            href="#"
            className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2"
          >
            Отчет
            <svg
              className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
