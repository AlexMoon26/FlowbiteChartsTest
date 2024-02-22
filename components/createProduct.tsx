"use client";
import { Button, Label, Modal, Select, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  price: number;
};

export default function CreateProduct() {
  const [openCreateProductModal, setOpenCreateProductModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const handleChange = (event) => {
    setSelectedItem(event.target.value);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
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
                  {...register("name")}
                  id="name"
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
                <Select
                  id="category"
                  required
                  value={selectedItem}
                  onChange={handleChange}
                >
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
