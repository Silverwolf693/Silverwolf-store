"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import { Product } from "@/lib/types";

export function ShopFilter({ products }: { products: Product[] }) {
  const [category, setCategory] = useState("all");

  const categories = useMemo(
    () => ["all", ...new Set(products.map((product) => product.category))],
    [products]
  );

  const filtered =
    category === "all" ? products : products.filter((product) => product.category === category);

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="category" className="mb-2 block text-sm font-medium text-slate-700">Category</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full max-w-xs rounded-xl border border-slate-300 bg-white px-3 py-2"
        >
          {categories.map((value) => (
            <option key={value} value={value}>
              {value === "all" ? "All categories" : value}
            </option>
          ))}
        </select>
      </div>
      {filtered.length ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="rounded-2xl bg-white p-8 text-center text-slate-600 shadow-sm">No products available yet</p>
      )}
    </div>
  );
}
