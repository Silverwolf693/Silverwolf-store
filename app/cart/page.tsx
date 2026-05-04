import { CartClient } from "@/components/cart-client";

export default function CartPage() {
  return (
    <div className="container-page space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Your Cart</h1>
        <p className="mt-2 text-slate-600">Review items before checkout.</p>
      </div>
      <CartClient />
    </div>
  );
}
