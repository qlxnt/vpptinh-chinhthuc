'use client';

import { useState } from 'react';
import { useQuote } from '@/context/QuoteContext';

export default function QuoteCart() {
  // Lấy thêm hàm clearQuote từ bộ nhớ
  const { cart, removeFromQuote, addToQuote, decreaseQuantity, clearQuote } = useQuote();

  // Tạo bộ nhớ tạm cho Form điền thông tin
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' }); // Lưu trạng thái báo lỗi/thành công

  // Hàm xử lý khi bấm nút Gửi
  const handleSubmit = () => {
    // 1. Kiểm tra giỏ hàng
    if (cart.length === 0) {
      setStatus({ type: 'error', message: 'Giỏ hàng đang trống. Vui lòng chọn sản phẩm!' });
      return;
    }
    
    // 2. Kiểm tra thông tin
    if (!name.trim() || !phone.trim()) {
      setStatus({ type: 'error', message: 'Vui lòng nhập đầy đủ Tên và Số điện thoại!' });
      return;
    }

    // 3. Nếu mọi thứ OK -> Xử lý thành công
    // (Sau này bạn có thể chèn code gọi API gửi tin nhắn Zalo/Email ở đoạn này)
    
    setStatus({ type: 'success', message: 'Gửi thành công! Cửa hàng Oanh 177 sẽ liên hệ sớm.' });
    
    // Xóa trắng form và giỏ hàng
    setName('');
    setPhone('');
    clearQuote();

    // Tự động tắt thông báo sau 5 giây
    setTimeout(() => {
      setStatus({ type: '', message: '' });
    }, 5000);
  };

  return (
    <div className="bg-white p-4 border rounded-lg shadow-sm h-full flex flex-col">
      <h3 className="text-xl font-bold text-gray-800 mb-5 border-b-2 pb-1 border-red-500 inline-block">
        Hàng Cần Báo Giá
      </h3>
      
      <div className="flex-1 space-y-2 overflow-y-auto mb-5 border-t pt-4">
        {cart.length === 0 ? (
          <p className="text-gray-500 text-center italic py-10 text-sm">
            Chưa có sản phẩm nào trong danh sách.
          </p>
        ) : (
          cart.map((item: any) => (
            <div key={item.id} className="flex items-center gap-3 border-b pb-3">
              <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden shrink-0 border">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium text-gray-800 line-clamp-2 mb-1.5 leading-relaxed">{item.name}</p>
                <div className="flex items-center gap-1">
                  <button onClick={() => decreaseQuantity(item.id)} className="w-6 h-6 flex justify-center items-center bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded text-gray-600 font-bold transition active:scale-95">-</button>
                  <span className="w-6 text-center text-xs font-bold text-red-600">{item.quantity}</span>
                  <button onClick={() => addToQuote(item)} className="w-6 h-6 flex justify-center items-center bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded text-gray-600 font-bold transition active:scale-95">+</button>
                </div>
              </div>
              <button onClick={() => removeFromQuote(item.id)} className="text-gray-400 hover:text-red-500 text-2xl font-light px-1 self-start transition" title="Xóa">×</button>
            </div>
          ))
        )}
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 space-y-3 mt-auto shadow-inner relative">
        <h4 className="font-bold text-gray-700 text-base mb-2">Thông tin người yêu cầu</h4>
        
        {/* HIỂN THỊ THÔNG BÁO LỖI HOẶC THÀNH CÔNG */}
        {status.message && (
          <div className={`p-2 text-xs font-medium rounded ${status.type === 'error' ? 'bg-red-100 text-red-600 border border-red-200' : 'bg-green-100 text-green-700 border border-green-200'}`}>
            {status.message}
          </div>
        )}

        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Tên của bạn</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)} // Bắt sự kiện gõ phím
            placeholder="Nguyễn Văn A" 
            className="w-full border border-gray-300 rounded-md py-1.5 px-3 focus:outline-none focus:border-red-600 focus:ring-1 text-sm" 
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Số điện thoại</label>
          <input 
            type="text" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)} // Bắt sự kiện gõ phím
            placeholder="0901xxxxxx" 
            className="w-full border border-gray-300 rounded-md py-1.5 px-3 focus:outline-none focus:border-red-600 focus:ring-1 text-sm" 
          />
        </div>

        {/* Gắn hàm handleSubmit vào nút */}
        <button 
          onClick={handleSubmit}
          className="w-full bg-red-600 text-white py-2.5 rounded-md hover:bg-red-700 transition font-bold shadow text-sm mt-2 active:scale-95"
        >
          Gửi Yêu Cầu Báo Giá
        </button>
      </div>
    </div>
  );
}