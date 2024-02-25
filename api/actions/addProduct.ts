"use server";

import { IProduct } from "@/types";

export async function AddNewProduct(product: IProduct) {
  const response = await fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  }

  return false;
}
