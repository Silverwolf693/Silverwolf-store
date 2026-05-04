import productsData from "@/data/products.json";
import { Product } from "@/lib/types";

export function getProducts(): Product[] {
  if (!Array.isArray(productsData)) {
    return [];
  }

  return productsData.filter((product): product is Product => {
    return (
      typeof product?.id === "string" &&
      typeof product?.name === "string" &&
      typeof product?.price === "number" &&
      typeof product?.description === "string" &&
      typeof product?.image === "string" &&
      typeof product?.category === "string" &&
      typeof product?.stock === "boolean"
    );
  });
}

export function getProductById(id: string): Product | undefined {
  return getProducts().find((product) => product.id === id);
}
