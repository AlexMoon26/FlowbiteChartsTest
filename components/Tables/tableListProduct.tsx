"use client";
import { IProduct } from "@/types";
import { Button, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import EditProductModal from "../Modal/editProductModal";

export function TableListProducts({ products }: { products: IProduct[] }) {
  const [productList, setProductList] = useState<IProduct[]>(products);

  const [openEditProductModal, setOpenEditProductModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  const handleEditButtonClick = (product: IProduct) => {
    setSelectedProduct(product);
    setOpenEditProductModal(true);
  };

  const updateProductList = (updatedProduct: IProduct) => {
    const updatedList = productList.map((product) => {
      // console.log(updatedProduct);

      if (product.id === updatedProduct.id) {
        return updatedProduct;
      } else {
        return product;
      }
    });
    setProductList(updatedList);
  };

  useEffect(() => {
    setProductList(products);
  }, []);

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
          {productList.map((product, i) => {
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
                    onClick={() => handleEditButtonClick(product)}
                  >
                    Edit
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>

      {openEditProductModal && (
        <EditProductModal
          openEditProductModal={openEditProductModal}
          setEditProductModal={setOpenEditProductModal}
          selectedProduct={selectedProduct}
          updateProductList={updateProductList}
        />
      )}
    </div>
  );
}
