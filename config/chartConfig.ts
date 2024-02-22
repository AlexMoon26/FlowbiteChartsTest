export const options = {
  chart: {
    height: "100%",
    maxWidth: "100%",
    fontFamily: "Inter, sans-serif",
    dropShadow: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
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
};
export const series = (data) => [
  {
    name: "New users",
    data: data,
    color: "#1A56DB",
  },
];
export const yaxis = {
  show: false,
};

export const type = "area";
