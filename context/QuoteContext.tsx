'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type CartItem = {
  id: number;
  name: string;
  image: string;
  quantity: number;
};

const QuoteContext = createContext<any>(null);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToQuote = (product: { id: number; name: string; image: string }) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const decreaseQuantity = (id: number) => {
    setCart((prevCart) => 
      prevCart.map((item) => 
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
      )
    );
  };

  const removeFromQuote = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // HÀM MỚI: Dọn sạch giỏ hàng sau khi gửi thành công
  const clearQuote = () => {
    setCart([]);
  };

  return (
    // Nhớ truyền thêm clearQuote ra ngoài
    <QuoteContext.Provider value={{ cart, addToQuote, decreaseQuantity, removeFromQuote, clearQuote }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  return useContext(QuoteContext);
}