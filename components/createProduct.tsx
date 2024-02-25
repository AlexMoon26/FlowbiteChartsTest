"use client";
import { AddNewProduct } from "@/api/actions";
import { IProduct } from "@/types";
import { Button, Label, Modal, Select, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function CreateProduct() {
  const [openCreateProductModal, setOpenCreateProductModal] = useState(false);

  const { register, handleSubmit } = useForm<IProduct>();
  const onSubmit = async (data) => {
    try {
      const result = await AddNewProduct(data);
      setOpenCreateProductModal(false);
      if (result)
        return alert(`Продукт успешно создан! \nId продукта : ${result.id}`);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="w-full max-md:w-[75vw]">
      <Button
        className="w-full"
        onClick={() => setOpenCreateProductModal(true)}
      >
        Создать товар
      </Button>
      <Modal
        show={openCreateProductModal}
        onClose={() => setOpenCreateProductModal(false)}
      >
        <Modal.Header>Создание нового товара</Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <div className="flex flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Название" />
                </div>
                <TextInput
                  {...register("title")}
                  id="title"
                  placeholder="Iphone 13"
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="price" value="Цена" />
                </div>
                <TextInput
                  {...register("price")}
                  id="price"
                  placeholder="2 000"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="category" value="Категория" />
                </div>
                <Select {...register("category")} id="category" required>
                  <option value="">Выберите категорию</option>
                  <option value="smartphones">smartphones</option>
                  <option value="laptops">laptops</option>
                  <option value="fragrances">fragrances</option>
                  <option value="skincare">skincare</option>
                  <option value="groceries">groceries</option>
                  <option value="home-decoration">home-decoration</option>
                </Select>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit">Создать</Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}
