'use client'
import React from "react";
import { useState } from "react";
import { ReactNode } from "react";

interface CartItem {
  id: string;
  name: string;
  image: { url: string };
}

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
}

export const CartContext = React.createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId: string) => {
    const itemIndex = cartItems.findIndex((item) => item.id === itemId);
    if (itemIndex !== -1) {
      setCartItems([
        ...cartItems.slice(0, itemIndex),
        ...cartItems.slice(itemIndex + 1),
      ]);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
