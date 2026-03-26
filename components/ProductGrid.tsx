'use client';

import { useQuote } from '@/context/QuoteContext';

const products = [
  { id: 1, name: "Giấy in A4 Double A 70gsm", image: "https://placehold.co/400x400/eeeeee/999999?text=Giay+A4" },
  { id: 2, name: "Bút bi Thiên Long TL-027", image: "https://placehold.co/400x400/eeeeee/999999?text=But+Bi" },
  { id: 3, name: "Bìa còng Thiên Long 7cm", image: "https://placehold.co/400x400/eeeeee/999999?text=Bia+Cong" },
  { id: 4, name: "Kẹp bướm Slecho 15mm", image: "https://placehold.co/400x400/eeeeee/999999?text=Kep+Buom" },
  { id: 5, name: "Băng keo trong 5cm", image: "https://placehold.co/400x400/eeeeee/999999?text=Bang+Keo" },
  { id: 6, name: "Sổ tay da cao cấp", image: "https://placehold.co/400x400/eeeeee/999999?text=So+Tay" },
  { id: 7, name: "Máy tính Casio FX-580", image: "https://placehold.co/400x400/eeeeee/999999?text=May+Tinh" },
  { id: 8, name: "Bút lông bảng Thiên Long", image: "https://placehold.co/400x400/eeeeee/999999?text=But+Long" },
];

export default function ProductGrid() {
  const { addToQuote } = useQuote();

  return (
    <div className="flex flex-col h-full">
      
      <div className="flex flex-col lg:flex-row gap-3 mb-5 pb-5 border-b border-gray-300/50">
        <div className="relative flex-1">
          <input 
            type="text" 
            placeholder="Tìm kiếm sản phẩm..." 
            className="w-full border border-gray-300 rounded-md py-2 pl-3 pr-10 focus:outline-none focus:border-[#8d6e63] focus:ring-1 focus:ring-[#8d6e63] text-sm bg-white" 
          />
          <button className="absolute right-3 top-2.5 text-gray-500 hover:text-[#8d6e63]">🔍</button>
        </div>
        
        <select className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-[#8d6e63] focus:ring-1 focus:ring-[#8d6e63] text-sm text-gray-700 bg-white min-w-[200px] cursor-pointer">
          <option value="">📁 Tất cả danh mục</option>
          <option value="giay">Giấy in - Photo</option>
          <option value="but">Bút các loại</option>
          <option value="bia">Bìa - File hồ sơ</option>
          <option value="bang-keo">Băng keo - Dao kéo</option>
        </select>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
        {products.map((product) => (
          <div key={product.id} className="bg-[#f4ebe6] border border-[#e8d5cb] rounded-md overflow-hidden shadow-sm hover:shadow-md transition">
            <img src={product.image} alt={product.name} className="w-full h-28 object-cover" />
            
            <div className="p-2.5 flex flex-col items-center">
              <h3 className="font-medium text-gray-800 text-center text-xs mb-1.5 h-7 line-clamp-2">
                {product.name}
              </h3>
              
              <button 
                onClick={() => addToQuote(product)} 
                className="w-full bg-[#8d6e63] text-white hover:bg-[#795548] text-xs font-medium py-1.5 rounded transition active:scale-95 shadow-sm"
              >
                + Thêm báo giá
              </button>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}