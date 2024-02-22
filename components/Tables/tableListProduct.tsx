"use client";
import { IProduct } from "@/types";
import { Button, Table } from "flowbite-react";

export function TableListProducts({ products }: { products: IProduct[] }) {
  return (
    <div className="overflow-x-scroll w-full max-md:w-[75vw] bg-white shadow rounded-lg ">
      <Table striped hoverable>
        <Table.Head>
          <Table.HeadCell>Продукт</Table.HeadCell>
          <Table.HeadCell>Цена</Table.HeadCell>
          <Table.HeadCell>Рейтинг</Table.HeadCell>
          <Table.HeadCell>Категория</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {products.map((product, i) => {
            return (
              <Table.Row
                key={i}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {product.title}
                </Table.Cell>
                <Table.Cell>${product.price}</Table.Cell>
                <Table.Cell>{product.rating}</Table.Cell>
                <Table.Cell>{product.category}</Table.Cell>
                <Table.Cell>
                  <Button
                    color="gray"
                    onClick={() =>
                      alert(
                        `Вы изменяете товар: ${product.title} с id: ${product.id}`
                      )
                    }
                  >
                    Edit
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
