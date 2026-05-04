import { ProductCard } from "@/components/product-card";
import { getProducts } from "@/lib/products";
import { ShopFilter } from "./shop-filter";

export default function ShopPage() {
  const products = getProducts();
  return (
    <div className="container-page space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Shop</h1>
        <p className="mt-2 text-slate-600">Browse all available products.</p>
      </div>
      <ShopFilter products={products} />
    </div>
  );
}
