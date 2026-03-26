export default function Header() {
  return (
    <header className="w-full">
      {/* Dải thông báo: Chữ được đổi sang màu nâu đậm hơn */}
      <div className="bg-[#f4ebe6] w-full py-2.5 px-4 text-center border-b border-[#e8d5cb]">
        <p className="text-[#5D4037] text-sm font-bold tracking-wide">
          Kính chào quý khách đến với Văn Phòng Phẩm Tịnh - Cửa hàng Oanh 177! Chuyên cung cấp sỉ & lẻ văn phòng phẩm. Vui lòng thêm sản phẩm vào danh sách để nhận báo giá chiết khấu cao nhất! 💥
        </p>
      </div>
      
      {/* Khu vực Tên cửa hàng & Slogan (Được căn giữa) */}
      <div className="bg-white w-full py-6 px-8 border-b border-[#e8d5cb] shadow-sm flex flex-col items-center justify-center">
        
        {/* Tên cửa hàng: Đổi font Serif, màu nâu đậm, căn giữa, size chữ to hơn một chút */}
        <h1 className="text-4xl font-serif font-extrabold text-[#5D4037] tracking-widest uppercase drop-shadow-sm mb-1.5">
          Cửa hàng Oanh 177
        </h1>
        
        {/* Slogan: Chữ in nghiêng, màu nâu nhạt hơn để tạo điểm nhấn phụ */}
        <p className="text-[15px] text-[#8d6e63] font-medium italic tracking-wide">
          "Đặt hàng nhanh tay, nhận ngay ưu đãi"
        </p>
        
      </div>
    </header>
  );
}