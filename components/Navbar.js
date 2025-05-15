import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
export default function Navbar() {
  const { cartItems } = useCart();
  const { logout } = useAuth();
  const router = useRouter();
  console.log(cartItems, "cartitem")
  const totalItems = (cartItems || []).reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/auth/login");
    } catch (err) {
      console.error("Logout failed:", err.message);
    }
  };

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center sticky top-0 z-50">
      <Link href="/" className="text-lg font-bold">
        MyShop
      </Link>

      <nav className="flex items-center gap-6">
        <Link href="/checkout" className="hover:underline">
          Checkout
        </Link>
        <Link href="/cart" className="relative flex items-center">
          <ShoppingCart className="w-6 h-6" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] min-w-[1.25rem] h-5 px-1 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>


        <button
          onClick={handleLogout}
          className="hover:underline text-sm text-red-500"
        >
          Logout
        </button>
      </nav>
    </header>
  );
}
