import { EditProduct } from "@/api/actions/";
import { IProduct } from "@/types";
import { Button, Label, Modal, Select, TextInput } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";

interface IProps {
  openEditProductModal: boolean;
  setEditProductModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedProduct: IProduct;
  updateProductList;
}

export default function EditProductModal({
  openEditProductModal,
  setEditProductModal,
  selectedProduct,
  updateProductList,
}: IProps) {
  const { register, handleSubmit } = useForm<IProduct>();
  const onSubmit = async (data) => {
    try {
      const result = await EditProduct({ id: selectedProduct.id, ...data });
      setEditProductModal(false);
      console.log(result);

      if (result) updateProductList(result);
      return alert(`Продукт успешно изменен! \nId продукта : ${result.id}`);
    } catch (err) {
      console.error(err);
    } finally {
    }
  };
  return (
    <Modal
      show={openEditProductModal}
      onClose={() => setEditProductModal(false)}
    >
      <Modal.Header>Изменение товара</Modal.Header>
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
                defaultValue={selectedProduct?.title}
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
                defaultValue={selectedProduct?.price}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="rating" value="Рейтинг" />
              </div>
              <TextInput
                {...register("rating")}
                id="rating"
                placeholder="4.60"
                defaultValue={selectedProduct?.rating}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="category" value="Категория" />
              </div>
              <Select
                {...register("category")}
                defaultValue={selectedProduct?.category}
                id="category"
                required
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
          <Button type="submit">Изменить</Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}
