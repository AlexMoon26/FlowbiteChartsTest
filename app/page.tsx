import React, { useEffect, useState } from "react";
import { getNumberOfUsers } from "@/app/actions/GetUsers";
import { CardAreaChart } from "@/app/components/Cards/card-area-chart";

const Home = async () => {
  const users = await getNumberOfUsers();
  return (
    <div className="p-20 grid grid-cols-2 gap-20 justify-center items-center">
      <CardAreaChart users={users} />
    </div>
  );
};

export default Home;
