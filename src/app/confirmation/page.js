"use client";
import { CheckCircle } from "lucide-react";

export default function OrderConfirmation() {
  return (
    <div className="text-center max-w-xl mx-auto mt-38 p-4">
      <CheckCircle className="mx-auto text-green-500" size={48} />
      <h2 className="text-2xl font-semibold mt-2">Order Confirmed!</h2>
      <p className="text-gray-600 mt-1">Thank you for your purchase.</p>
    </div>
  );
}