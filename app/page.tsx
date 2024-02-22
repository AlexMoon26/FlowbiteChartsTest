import React from "react";
import {
  GetNumberOfUsersDown,
  GetNumberOfUsersUp,
  GetListProducts,
} from "@/api/actions";
import { TableListProducts, СardAreaChart } from "@/components";
import CreateProduct from "@/components/createProduct";

export default async function Home() {
  const usersUp = await GetNumberOfUsersUp();
  const usersDown = await GetNumberOfUsersDown();
  const products = await GetListProducts();
  return (
    <div className="flex flex-col max-md:items-center px-4 overflow-x-auto w-full mx-auto xl:px-80 gap-5">
      <div className="flex max-md:flex-col max-lg:justify-center justify-between gap-4 ">
        <СardAreaChart users={usersUp} />
        <СardAreaChart users={usersDown} />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-center w-full max-md:p-4">
          <CreateProduct />
        </div>
        <div className="flex justify-center w-full mb-4 ">
          <div className="flex justify-center max-md:p-4 w-full gap-4">
            <TableListProducts products={products} />
          </div>
        </div>
      </div>
    </div>
  );
}
