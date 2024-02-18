import React from "react";
import { getNumberOfUsers, getTopUsers } from "@/app/actions/GetUsers";
import { CardAreaChart } from "@/app/components/Cards/";
import CardListUsers from "./components/Cards/card-list-users";

const Home = async () => {
  const users = await getNumberOfUsers();
  const topUsers = await getTopUsers();
  return (
    <div className="p-5 lg:p-20 grid lg:grid-cols-2 gap-20">
      <div className="flex justify-center">
        <CardAreaChart users={users} />
      </div>

      <div className="flex justify-center">
        <CardListUsers topUsers={topUsers} />
      </div>
    </div>
  );
};

export default Home;
