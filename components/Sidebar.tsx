'use client';

import Link from 'next/link';
import { useQuote } from '@/context/QuoteContext';

export default function Sidebar() {
  const { cart } = useQuote();
  
  // Tính tổng số lượng tất cả các món hàng đang có trong báo giá
  const totalItems = cart.reduce((sum: number, item: any) => sum + item.quantity, 0);

  return (
    <div className="flex flex-col bg-white p-4 border rounded-lg shadow-sm h-full">
      <div className="flex flex-col gap-2 mb-6">
        <Link href="#" className="bg-gray-50 block px-4 py-2 rounded-md text-gray-700 hover:bg-red-50 hover:text-red-600 text-sm font-medium border-l-4 border-transparent hover:border-red-600 transition">
          📁 Danh mục sản phẩm
        </Link>
        <button className="bg-red-600 w-full text-left px-4 py-2 rounded-md text-white font-medium text-sm hover:bg-red-700 transition flex justify-between items-center shadow-sm">
          <span>📋 Hàng cần báo giá</span>
          <span className="bg-white text-red-600 text-xs font-bold px-2 py-0.5 rounded-full">
            {totalItems} {/* HIỂN THỊ CON SỐ TỰ ĐỘNG Ở ĐÂY */}
          </span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pt-2 border-t">
        <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 pb-1 border-red-500 inline-block">Góc Tư Vấn</h3>
        <div className="flex flex-col gap-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Link key={item} href="#" className="group flex gap-3 items-center bg-gray-50 p-3 rounded-md border border-gray-100 hover:border-red-200 transition">
              <div className="w-16 h-16 bg-gray-200 rounded shrink-0 overflow-hidden">
                  <img src="https://placehold.co/100x100/eeeeee/999999?text=Blog" alt="thumb" className="w-full h-full object-cover group-hover:scale-110 transition" />
              </div>
              <p className="text-sm text-gray-700 group-hover:text-red-600 font-medium line-clamp-2">Bài viết tư vấn số {item}: Cách chọn văn phòng phẩm tối ưu</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}