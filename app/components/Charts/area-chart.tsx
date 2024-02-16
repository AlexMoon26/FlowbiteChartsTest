"use client";
import ApexCharts from "apexcharts";
import { useEffect, useRef, useState } from "react";
import numeral from "numeral";

interface NumberFact {
  number: number;
  text: string;
  found: boolean;
  type: string;
}

export const Chart = ({
  setPercent,
  setSumm,
}: {
  setPercent: (percent: number) => void;
  setSumm: (summ: number) => void;
}) => {
  const chartRef = useRef(null);
  const [data, setData] = useState<Array<Number>>([]);

  useEffect(() => {
    const fetchNumberFact = async () => {
      try {
        const response = await fetch("http://numbersapi.com/random?json");
        const factData = (await response.json()) as NumberFact;
        setData((prevData) => {
          const newData = [...prevData, factData.number] as [number, number];
          if (newData.length >= 2) {
            const [prevValue, currValue] = newData.slice(-2);
            const differencePercent =
              ((currValue - prevValue) / prevValue) * 100;
            setPercent(differencePercent);
            setSumm(numeral(prevValue + currValue).format("0.0a"));
          }
          return newData;
        });
      } catch (error) {
        console.error("Failed to fetch number fact:", error);
      }
    };

    fetchNumberFact();
  }, [setPercent, setData, setSumm]);

  useEffect(() => {
    const options = {
      chart: {
        height: "100%",
        maxWidth: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: "#1C64F2",
          gradientToColors: ["#1C64F2"],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: 0,
        },
      },
      series: [
        {
          name: "New users",
          data: data, // Используем полученное число в качестве данных для графика
          color: "#1A56DB",
        },
      ],
      xaxis: {
        categories: [
          "01 February",
          "02 February",
          "03 February",
          "04 February",
          "05 February",
          "06 February",
          "07 February",
        ],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
    };

    if (chartRef.current && typeof ApexCharts !== "undefined") {
      const chart = new ApexCharts(chartRef.current, options);
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, [data]);

  return <div ref={chartRef} id="area-chart"></div>;
};
