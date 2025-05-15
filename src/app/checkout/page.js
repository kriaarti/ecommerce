"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ address: "", payment: "" });
  const [errors, setErrors] = useState({ address: "", payment: "" });
  const router = useRouter();

  const validateStep = () => {
    const newErrors = { address: "", payment: "" };
    let isValid = true;

    if (step === 1 && !form.address.trim()) {
      newErrors.address = "Address is required";
      isValid = false;
    }

    if (step === 2 && !form.payment.trim()) {
      newErrors.payment = "Please select a payment method";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const next = () => {
    if (validateStep()) {
      setStep((s) => s + 1);
    }
  };

  const prev = () => {
    setStep((s) => s - 1);
  };

  const handleSubmit = () => {
    if (validateStep()) {
      router.push("/confirmation");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-38 p-4 bg-indigo-100">
      {step === 1 && (
        <div>
          <h2 className="mb-2 font-semibold">Address</h2>
          <input
            className="border w-full p-2"
            value={form.address}
            onChange={(e) =>
              setForm({ ...form, address: e.target.value })
            }
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">{errors.address}</p>
          )}
        </div>
      )}
      {step === 2 && (
        <div>
          <h2 className="mb-2 font-semibold">Payment Method</h2>
          <select
            className="border w-full p-2"
            value={form.payment}
            onChange={(e) =>
              setForm({ ...form, payment: e.target.value })
            }
          >
            <option value="">Select Payment Method</option>
            <option value="cod">Cash on Delivery</option>
            <option value="online">Online Payment</option>
          </select>
          {errors.payment && (
            <p className="text-red-500 text-sm mt-1">{errors.payment}</p>
          )}
        </div>
      )}
      <div className="mt-4 flex justify-between">
        {step > 1 && (
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded"
            onClick={prev}
          >
            Back
          </button>
        )}
        {step < 2 ? (
          <button
            onClick={next}
            className="bg-blue-600 text-white py-2 px-4 rounded"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
