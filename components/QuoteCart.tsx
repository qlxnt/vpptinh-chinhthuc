'use client';

import { useState } from 'react';
import { useQuote } from '@/context/QuoteContext';

export default function QuoteCart() {
  const { 
    quoteItems, 
    removeFromQuote, 
    increaseQuantity, 
    decreaseQuantity, 
    updateQuantity 
  } = useQuote();
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleXacNhan = () => {
    if (!name.trim() || !phone.trim()) {
      setError('⚠️ Vui lòng nhập đầy đủ Tên và Số điện thoại!');
      return;
    }
    
    if (!quoteItems || quoteItems.length === 0) {
      setError('⚠️ Bạn chưa chọn sản phẩm nào vào báo giá!');
      return;
    }
    
    setError('');
    alert(`🎉 TUYỆT VỜI!\nĐã nhận yêu cầu báo giá của anh/chị: ${name}\nSĐT: ${phone}\nTổng số mã hàng: ${quoteItems.length}\n\nCửa hàng Oanh 177 sẽ liên hệ ngay!`);
  };

  return (
    <div className="bg-white p-5 rounded-md border border-[#e8d5cb] shadow-sm flex flex-col h-fit">
      
      {/* 1. NÚT TIÊU ĐỀ: Đổi sang màu Nâu (#8d6e63) */}
      <div className="bg-[#8d6e63] text-white rounded-md p-3 flex justify-between items-center mb-5 shadow-sm">
        <div className="flex items-center gap-2 font-bold text-base tracking-wide">
          <span>📋</span> Hàng Cần Báo Giá
        </div>
        {/* Số lượng: Đổi sang chữ Nâu */}
        <span className="bg-white text-[#8d6e63] text-sm font-bold px-2.5 py-0.5 rounded-full shadow-inner">
          {quoteItems?.length || 0}
        </span>
      </div>
      
      {/* 2. DANH SÁCH SẢN PHẨM */}
      <div className="overflow-y-auto max-h-[350px] mb-2 pr-2 custom-scrollbar">
        {(!quoteItems || quoteItems.length === 0) ? (
          <p className="text-sm text-gray-400 italic text-center py-5">
            Chưa có sản phẩm nào trong danh sách.
          </p>
        ) : (
          <ul className="space-y-4">
            {quoteItems.map((item: any) => (
              <li key={item.id} className="border-b border-[#e8d5cb] pb-3">
                
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm text-gray-700 font-bold line-clamp-2 pr-2">
                    {item.name}
                  </span>
                  {/* Nút Xóa (X): Đổi sang màu nâu */}
                  <button 
                    onClick={() => removeFromQuote(item.id)}
                    className="text-[#8d6e63] hover:text-[#795548] font-bold px-1 text-base transition"
                    title="Xóa"
                  >✕</button>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#8d6e63] bg-[#f4ebe6] px-2 py-1 rounded">
                    ĐVT: {item.unit || 'Cái'}
                  </span>
                  
                  <div className="flex items-center border border-[#e8d5cb] rounded overflow-hidden shadow-sm">
                    <button 
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-2.5 py-0.5 bg-[#fcf9f8] hover:bg-[#f4ebe6] text-[#8d6e63] font-bold transition"
                    >
                      -
                    </button>
                    <input 
                      type="number" 
                      min="1"
                      value={item.quantity || 1}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                      className="w-10 text-center py-0.5 text-sm focus:outline-none border-x border-[#e8d5cb] font-bold text-gray-700"
                    />
                    <button 
                      onClick={() => increaseQuantity(item.id)}
                      className="px-2.5 py-0.5 bg-[#fcf9f8] hover:bg-[#f4ebe6] text-[#8d6e63] font-bold transition"
                    >
                      +
                    </button>
                  </div>
                </div>

              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 3. FORM NHẬP THÔNG TIN */}
      <div className="border-t border-[#e8d5cb] pt-4 bg-[#fcf9f8] -mx-5 px-5 pb-1 mt-2">
        <h3 className="font-bold text-sm text-[#8d6e63] mb-3">Thông tin nhận báo giá:</h3>
        
        <div className="space-y-2.5 mb-3">
          <input 
            type="text" 
            placeholder="Tên của bạn (*)" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-[#e8d5cb] rounded px-3 py-2 text-sm focus:outline-none focus:border-[#8d6e63] focus:ring-1 focus:ring-[#8d6e63] bg-white transition"
          />
          <input 
            type="tel" 
            placeholder="Số điện thoại (*)" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-[#e8d5cb] rounded px-3 py-2 text-sm focus:outline-none focus:border-[#8d6e63] focus:ring-1 focus:ring-[#8d6e63] bg-white transition"
          />
          <input 
            type="email" 
            placeholder="Email nhận file PDF (Tùy chọn)" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-[#e8d5cb] rounded px-3 py-2 text-sm focus:outline-none focus:border-[#8d6e63] focus:ring-1 focus:ring-[#8d6e63] bg-white transition"
          />
        </div>

        {/* Báo lỗi: Đổi sang màu nâu với nền nhạt để dễ đọc */}
        {error && (
          <div className="bg-[#f4ebe6] border border-[#e8d5cb] text-[#795548] text-xs font-bold p-2 rounded mb-3">
            {error}
          </div>
        )}

        <button 
          onClick={handleXacNhan}
          className="w-full bg-[#8d6e63] text-white font-bold py-2.5 rounded hover:bg-[#795548] transition shadow-md active:scale-95 mt-2 tracking-wide"
        >
          GỬI YÊU CẦU BÁO GIÁ
        </button>
      </div>

    </div>
  );
}