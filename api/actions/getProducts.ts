"use server";

import { IProduct } from "@/types";

export async function GetListProducts(): Promise<IProduct[]> {
  const response = await fetch("https://dummyjson.com/products");
  const { products } = await response.json();

  return products;
}
