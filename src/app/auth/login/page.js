"use client";
import { useState } from "react";
import { useAuth } from "../../../../context/AuthContext";
import { useRouter } from "next/navigation";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      router.push("/products");
    } catch (err) {
      alert(err.message); 
    }
  };

  const navigateToSignup = () => {
    router.push("/auth/signup"); 
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4 mt-28 border rounded">
      <h2 className="text-2xl mb-4">Login</h2>
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
        placeholder="Password"
        className="w-full p-2 mb-3 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        type="submit"
        className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Login
      </button>

      <div className="mt-4 text-center">
        <p>Don't have an account?</p>
        <button
          type="button"
          onClick={navigateToSignup}
          className="mt-2 w-full p-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          Signup
        </button>
      </div>
    </form>
  );
}
