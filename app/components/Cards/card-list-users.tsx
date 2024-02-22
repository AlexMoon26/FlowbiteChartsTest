"use client";
import { CardUser } from "@/app/components/CardUser";
import { LoaderListUser } from "../Loaders";
import dynamic from "next/dynamic";
import { Table } from "flowbite-react";

const DynamicChartComponent = dynamic(
  () => import("@/app/components/CardUserItem"),
  {
    ssr: false,
    loading: () => <LoaderListUser />,
  }
);

const CardListUsers = ({ products }) => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Продукт</Table.HeadCell>
          <Table.HeadCell>Описание</Table.HeadCell>
          <Table.HeadCell>Цена</Table.HeadCell>
          <Table.HeadCell>Рейтинг</Table.HeadCell>
          <Table.HeadCell>Брендд</Table.HeadCell>
          <Table.HeadCell>Категория</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {products.map((product, i) => {
            {
              product.title;
            }
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {'Apple MacBook Pro 17"'}
              </Table.Cell>
              <Table.Cell>Sliver</Table.Cell>
              <Table.Cell>Laptop</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Edit
                </a>
              </Table.Cell>
            </Table.Row>;
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default CardListUsers;
