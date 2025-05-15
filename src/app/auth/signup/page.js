"use client";
import { useState } from "react";
import { useAuth } from "../../../../context/AuthContext";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      router.push("/auth/login"); 
    } catch (err) {
      alert(err.message); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-38 p-4 border rounded">
      <h2 className="text-2xl mb-4">Signup</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 mb-3 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password (6+ chars)"
        className="w-full p-2 mb-3 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        type="submit"
        className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Signup
      </button>
      <button
        type="button"
        onClick={() => router.push("/auth/login")}
        className="mt-2 w-full p-2 bg-gray-400 text-white rounded hover:bg-gray-500"
      >
        Back to Login
      </button>

    </form>
  );
}
