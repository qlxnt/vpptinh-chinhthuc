'use client';

import { useState } from 'react';
import { useQuote } from '@/context/QuoteContext';
// Gọi dữ liệu từ file JSON của bạn
import productsData from '@/data/products.json';

// Biểu tượng Zalo SVG
const ZaloIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.2356 3.00012C6.91417 3.00012 3.01367 6.47171 3.01367 10.9999C3.01367 13.918 4.63661 16.2917 7.07849 17.6534L6.15177 20.3061C5.92211 20.9633 6.66601 21.464 7.22178 21.0185L10.3804 18.5146C10.9786 18.5833 11.597 18.6186 12.2356 18.6186C17.557 18.6186 21.4575 15.1471 21.4575 10.9999C21.4575 6.47171 17.557 3.00012 12.2356 3.00012ZM16.2891 10.3725C16.6373 10.3725 16.9191 10.6543 16.9191 11.0025C16.9191 11.3506 16.6373 11.6325 16.2891 11.6325H14.192C14.1207 11.6325 14.0628 11.6904 14.0628 11.7617V12.7915C14.0628 13.0456 13.857 13.2515 13.6028 13.2515H11.5323C11.1841 13.2515 10.9023 12.9696 10.9023 12.6215C10.9023 12.2733 11.1841 11.9915 11.5323 11.9915H12.7228C12.7941 11.9915 12.852 11.9336 12.852 11.8623V10.8325C12.852 10.5784 13.0578 10.3725 13.312 10.3725H16.2891ZM10.2974 10.3725C10.6456 10.3725 10.9274 10.6543 10.9274 11.0025C10.9274 11.3506 10.6456 11.6325 10.2974 11.6325H8.20037C8.12903 11.6325 8.07117 11.6904 8.07117 11.7617V12.7915C8.07117 13.0456 7.86532 13.2515 7.61117 13.2515H5.5407C5.19253 13.2515 4.91071 12.9696 4.91071 12.6215C4.91071 12.2733 5.19253 11.9915 5.5407 11.9915H6.7312C6.80254 11.9915 6.8604 11.9336 6.8604 11.8623V10.8325C6.8604 10.5784 7.06625 10.3725 7.3204 10.3725H10.2974ZM17.1522 13.2515C16.898 13.2515 16.6922 13.0456 16.6922 12.7915V11.7617C16.6922 11.6904 16.6343 11.6325 16.563 11.6325H15.1158C14.7677 11.6325 14.4858 11.3506 14.4858 11.0025C14.4858 10.6543 14.7677 10.3725 15.1158 10.3725H17.8465C18.1006 10.3725 18.3065 10.5784 18.3065 10.8325V12.7915C18.3065 13.0456 18.1006 13.2515 17.8465 13.2515H17.1522ZM12.0673 13.2515C11.8131 13.2515 11.6073 13.0456 11.6073 12.7915V11.7617C11.6073 11.6904 11.5494 11.6325 11.4781 11.6325H10.0309C9.68278 11.6325 9.40097 11.3506 9.40097 11.0025C9.40097 10.6543 9.68278 10.3725 10.0309 10.3725H12.7616C13.0157 10.3725 13.2216 10.5784 13.2216 10.8325V12.7915C13.2216 13.0456 13.0157 13.2515 12.7616 13.2515H12.0673ZM20.7831 10.3725C21.1313 10.3725 21.4131 10.6543 21.4131 11.0025C21.4131 11.3506 21.1313 11.6325 20.7831 11.6325H18.6861C18.6147 11.6325 18.5569 11.6904 18.5569 11.7617V12.7915C18.5569 13.0456 18.351 13.2515 18.0969 13.2515H16.0264C15.6782 13.2515 15.3964 12.9696 15.3964 12.6215C15.3964 12.2733 15.6782 11.9915 16.0264 11.9915H17.2169C17.2883 11.9915 17.3461 11.9336 17.3461 11.8623V10.8325C17.3461 10.5784 17.552 10.3725 17.8061 10.3725H20.7831ZM22.4575 10.9999C22.4575 15.6983 18.2709 19.6186 12.2356 19.6186C11.6669 19.6186 11.1098 19.5898 10.5649 19.5312C10.5401 19.5284 10.5152 19.5285 10.4906 19.5314L7.5402 19.9515L8.35756 17.6536C8.36872 17.6218 8.36774 17.5866 8.35467 17.5557C6.01423 16.3533 4.01367 14.1507 4.01367 10.9999C4.01367 6.96347 7.73295 4.00012 12.2356 4.00012C17.3377 4.00012 22.4575 6.96347 22.4575 10.9999Z"/>
  </svg>
);

export default function ProductGrid() {
  const { addToQuote } = useQuote();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const shortDummyDescription = `Sản phẩm được sản xuất trên dây chuyền công nghệ hiện đại, đảm bảo chất lượng tiêu chuẩn quốc tế. Chất liệu cao cấp, an toàn cho sức khỏe người sử dụng và thân thiện với môi trường. Thiết kế thông minh, tiện dụng, phù hợp với nhiều nhu cầu khác nhau từ học sinh, sinh viên đến dân văn phòng. Quy cách đóng gói sỉ: Mỗi lốc/hộp được bọc kỹ màng co, sau đó đóng vào thùng carton nhiều lớp chắc chắn, chống va đập và ẩm mốc trong quá trình vận chuyển. Cam kết từ Cửa hàng Oanh 177: Hàng chính hãng 100%, chiết khấu đặc biệt hấp dẫn cho các đơn hàng số lượng lớn. Mọi thắc mắc vui lòng liên hệ trực tiếp qua Zalo để được tư vấn cụ thể nhất! Chúng tôi luôn sẵn sàng hỗ trợ bạn nhanh chóng.`;

  return (
    <div>
      {/* 1. THANH TÌM KIẾM & DANH MỤC */}
      <div className="bg-white p-3 rounded-md border border-[#e8d5cb] shadow-sm mb-5 flex gap-3 items-center">
        <div className="flex-1 flex items-center bg-[#fcf9f8] border border-gray-200 rounded px-3 py-2">
          <input 
            type="text" 
            placeholder="Tìm kiếm sản phẩm..." 
            className="bg-transparent border-none outline-none w-full text-sm text-gray-700"
          />
          <span className="text-blue-500 text-lg cursor-pointer">🔍</span>
        </div>
        <div className="border border-gray-200 rounded bg-[#fcf9f8] px-3 py-2 flex items-center gap-2 cursor-pointer">
          <span className="text-yellow-500">📁</span>
          <select className="bg-transparent border-none outline-none text-sm text-gray-700 cursor-pointer">
            <option>Tất cả danh mục</option>
            <option>Bút - Mực</option>
            <option>Giấy In</option>
            <option>Bìa - Kẹp</option>
          </select>
        </div>
      </div>

      {/* 2. LƯỚI SẢN PHẨM */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {productsData.map((product: any) => (
          <div key={product.id} className="bg-[#f4ebe6] rounded-md border border-[#e8d5cb] p-3 flex flex-col items-center shadow-sm hover:shadow-md transition group">
            <div 
              className="w-full h-32 bg-white rounded flex items-center justify-center overflow-hidden mb-3 cursor-pointer relative"
              onClick={() => setSelectedProduct(product)}
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="max-w-full max-h-full object-contain group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="bg-white/90 text-[#8d6e63] text-xs font-bold px-2 py-1 rounded shadow">Xem chi tiết</span>
              </div>
            </div>
            <h3 className="font-medium text-gray-800 text-center text-xs mb-1 h-7 line-clamp-2">
              {product.name}
            </h3>
            <p className="text-[11px] text-[#8d6e63] mb-2 font-medium">
              ĐVT: {product.unit || 'Cái'}
            </p>
            <button 
              onClick={() => addToQuote(product)}
              className="w-full bg-[#8d6e63] text-white text-xs font-bold py-1.5 rounded hover:bg-[#795548] transition mt-auto active:scale-95"
            >
              + Thêm báo giá
            </button>
          </div>
        ))}
      </div>

      {/* 3. CỬA SỔ POPUP CHI TIẾT SẢN PHẨM */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 transition-all duration-300" onClick={() => setSelectedProduct(null)}>
          <div className="bg-white w-full max-w-4xl rounded-2xl shadow-3xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] transition-transform duration-300 scale-100" onClick={(e) => e.stopPropagation()}>
            
            <div className="w-full md:w-5/12 bg-[#fcf9f8] p-10 flex items-center justify-center border-r border-gray-100">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name} 
                className="max-w-full max-h-[450px] object-contain drop-shadow-xl"
              />
            </div>

            <div className="w-full md:w-7/12 p-8 md:p-10 flex flex-col">
              
              {/* ĐÃ CẬP NHẬT: Font chữ Serif, Màu nâu #8d6e63, Có bóng mờ nhẹ */}
              <h2 className="text-3xl font-serif font-bold text-[#8d6e63] mb-3 leading-tight tracking-wide drop-shadow-sm">
                {selectedProduct.name}
              </h2>
              
              <p className="inline-block bg-[#f4ebe6] text-[#8d6e63] px-4 py-1.5 rounded-full text-sm font-bold mb-5 w-fit shadow-sm">
                Đơn vị tính: {selectedProduct.unit || 'Cái'}
              </p>

              <hr className="border-gray-100 mb-5" />

              <div className="flex-1 overflow-y-auto pr-3 custom-scrollbar mb-8 text-sm text-gray-700 leading-relaxed text-justify">
                <p className="font-bold text-gray-800 mb-2.5 text-base">Thông tin chi tiết sản phẩm:</p>
                <p className="whitespace-pre-line">
                  {selectedProduct.description || shortDummyDescription}
                </p>
              </div>

              {/* KHU VỰC 3 NÚT BẤM */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-gray-100 mt-auto w-full">
                
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="w-full flex items-center justify-center px-2 py-2.5 rounded-lg text-white font-bold text-sm bg-gray-500 hover:bg-gray-600 transition duration-200 shadow-md active:scale-95"
                >
                  Đóng
                </button>

                <a 
                  href="https://zalo.me/0931736266" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 px-2 py-2.5 rounded-lg text-white font-bold text-sm bg-[#0181ef] hover:bg-[#006fca] transition duration-200 shadow-md active:scale-95 text-center"
                >
                  <ZaloIcon />
                  Mua ngay
                </a>

                <button 
                  onClick={() => {
                    addToQuote(selectedProduct);
                    setSelectedProduct(null); 
                  }}
                  className="w-full flex items-center justify-center px-2 py-2.5 rounded-lg text-white font-bold text-sm bg-[#8d6e63] hover:bg-[#795548] transition duration-200 shadow-md active:scale-95"
                >
                  + Thêm báo giá
                </button>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}