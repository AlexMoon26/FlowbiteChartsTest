import React from "react";
import {
  getNumberOfUsersDown,
  getNumberOfUsersUp,
  getTopUsers,
} from "@/app/actions/GetUsers";
import { CardAreaChart } from "@/app/components/Cards/";
import TableListProducts from "./components/Cards/TableListProduct";

const Home = async () => {
  const usersUp = await getNumberOfUsersUp();
  const usersDown = await getNumberOfUsersDown();
  const products = await getTopUsers();
  return (
    <div className="flex flex-col max-md:items-center px-4 overflow-x-auto w-full mx-auto xl:px-80 gap-5">
      <div className="flex max-md:flex-col max-lg:justify-center justify-between gap-4 ">
        <CardAreaChart users={usersUp} />
        <CardAreaChart users={usersDown} />
      </div>

      <div className="flex justify-center w-full mb-4 ">
        <div className="flex  justify-center max-md:p-4 w-full">
          <TableListProducts products={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;
