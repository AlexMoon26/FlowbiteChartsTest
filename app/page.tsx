import React from "react";
import { CardAreaChart } from "./components/Cards/card-area-chart";

const Home = () => {
  return (
    <div className="p-20 grid grid-cols-2 gap-20 justify-center items-center">
      <CardAreaChart />
    </div>
  );
};

export default Home;
