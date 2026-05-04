"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { CartItem } from "@/lib/types";

const STORAGE_KEY = "silverwolf-cart";

export function CartClient() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw) as CartItem[];
      if (Array.isArray(parsed)) setItems(parsed);
    } catch {
      setItems([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((item) => item.id !== id));
      return;
    }
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  if (!items.length) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
        <h2 className="text-xl font-semibold">Your cart is empty</h2>
        <p className="mt-2 text-slate-600">Add products from the shop to get started.</p>
        <Link href="/shop" className="mt-5 inline-flex rounded-xl bg-accent px-4 py-2 text-white">
          Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {items.map((item) => (
        <div key={item.id} className="flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-sm sm:flex-row sm:items-center">
          <div className="relative h-20 w-full overflow-hidden rounded-xl sm:w-24">
            <Image src={item.image} alt={item.name} fill className="object-cover" sizes="96px" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-slate-600">${item.price.toFixed(2)} each</p>
          </div>
          <input
            type="number"
            min={1}
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
            className="w-20 rounded-xl border border-slate-300 px-3 py-2"
          />
          <button
            onClick={() => removeItem(item.id)}
            className="rounded-xl bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-200"
          >
            Remove
          </button>
        </div>
      ))}
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <p className="text-lg font-semibold">Total: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
}
