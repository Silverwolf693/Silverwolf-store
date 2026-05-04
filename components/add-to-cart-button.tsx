"use client";

import { useState } from "react";
import { Product, CartItem } from "@/lib/types";

const STORAGE_KEY = "silverwolf-cart";

export function AddToCartButton({ product }: { product: Product }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    const raw = localStorage.getItem(STORAGE_KEY);
    const cart: CartItem[] = raw ? JSON.parse(raw) : [];
    const existing = cart.find((item) => item.id === product.id);

    const next = existing
      ? cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      : [...cart, { ...product, quantity: 1 }];

    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <button
      onClick={handleAdd}
      disabled={!product.stock}
      className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
    >
      {product.stock ? (added ? "Added" : "Add to cart") : "Out of stock"}
    </button>
  );
}
