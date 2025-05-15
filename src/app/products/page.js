
"use client";
import { useEffect, useState } from "react";
import { useCart } from "../../../context/CartContext";
import Navbar from "../../../components/Navbar";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
       <div className="w-full">
          <Navbar />
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-10">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded">
          <img src={product.image} className="h-32 mx-auto object-contain" />
          <h3 className="text-sm font-semibold mt-2">{product.title}</h3>
          <p className="text-xs mt-1">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-2 w-full bg-black text-white text-sm py-1 rounded cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
       </div>
  );
}