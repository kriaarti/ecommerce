
"use client";

import { ThemeProvider } from 'next-themes';
import { AuthProvider } from '../../context/AuthContext';
import { CartProvider } from '../../context/CartContext';

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AuthProvider>
        <CartProvider>
          <main>{children}</main>
          </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
