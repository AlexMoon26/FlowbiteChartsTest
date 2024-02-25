"use server";

import { IProduct } from "@/types";

export async function EditProduct(product: IProduct) {
  const response = await fetch(`https://dummyjson.com/products/${product.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: product.title,
      price: product.price,
      rating: product.rating,
      category: product.category,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  }

  return false;
}
