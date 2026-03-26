'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

const QuoteContext = createContext<any>(undefined);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [quoteItems, setQuoteItems] = useState<any[]>([]);

  // 1. Thêm sản phẩm (Nếu có rồi thì cộng thêm 1)
  const addToQuote = (product: any) => {
    setQuoteItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      
      if (existingItem) {
        // Đã có trong giỏ -> Tăng số lượng (quantity) lên 1
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      }
      
      // Chưa có trong giỏ -> Thêm mới với số lượng mặc định là 1
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // 2. Xóa hẳn sản phẩm (Nút X đỏ)
  const removeFromQuote = (id: string) => {
    setQuoteItems((prev) => prev.filter((item) => item.id !== id));
  };

  // 3. Tăng số lượng 1 đơn vị (Nút +)
  const increaseQuantity = (id: string) => {
    setQuoteItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      )
    );
  };

  // 4. Giảm số lượng 1 đơn vị (Nút -)
  const decreaseQuantity = (id: string) => {
    setQuoteItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          // Nếu số lượng đang là 1 mà bấm trừ, ta tự động xóa luôn sản phẩm đó
          if (item.quantity <= 1) return null; 
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      }).filter(Boolean) // Lọc bỏ những sản phẩm bị trả về null ở trên
    );
  };

  // 5. Cập nhật số lượng trực tiếp (Khi khách tự gõ số vào ô)
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return; // Không cho nhập số âm hoặc số 0
    setQuoteItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  return (
    <QuoteContext.Provider 
      value={{ 
        quoteItems, 
        addToQuote, 
        removeFromQuote, 
        increaseQuantity, 
        decreaseQuantity, 
        updateQuantity 
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  return useContext(QuoteContext) || { 
    quoteItems: [], 
    addToQuote: () => {}, 
    removeFromQuote: () => {},
    increaseQuantity: () => {},
    decreaseQuantity: () => {},
    updateQuantity: () => {}
  };
}