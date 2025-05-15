
"use client";
import { useCart } from "../../../context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cartItems, updateQty, removeItem } = useCart();

  return (
    <div className="max-w-xl mx-auto mt-38 p-4 bg-indigo-100">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="flex justify-center mb-2 items-center gap-6">
            <img src={item.image} className="h-20 mx-auto " />
            <p>{item.title}</p>
            <div className="flex gap-4 items-center">
   
              <button
                onClick={() => updateQty(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
                className="px-2 py-1 bg-gray-300 rounded"
              >
                -
              </button>

          
              <span>{item.quantity}</span>

              <button
                onClick={() => updateQty(item.id, item.quantity + 1)}
                className="px-2 py-1 bg-gray-300 rounded"
              >
                +
              </button>

      
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 px-2 py-1 bg-gray-300 rounded"
              >
                x
              </button>
            </div>
          </div>
        ))
      )}
       {cartItems.length > 0 && (
      <Link href="/checkout">
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">Checkout</button>
      </Link>
         )}
    </div>
  );
}
