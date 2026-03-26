import Banner from "@/components/Banner";
import Sidebar from "@/components/Sidebar";
import ProductGrid from "@/components/ProductGrid";
import QuoteCart from "@/components/QuoteCart"; // Thêm import component mới

export default function Home() {
  return (
    <>
      <Banner />
      
      <div className="container mx-auto px-4 py-6">
        {/* Chia layout 3 cột dọc với tỷ lệ 20/50/30 */}
        <div className="grid grid-cols-10 gap-6">
          
          {/* CỘT 1: Sidebar & Bài viết (20% - col-span-2) */}
          <div className="col-span-2 h-full">
            <Sidebar />
          </div>
          
          {/* CỘT 2: Hiển thị SP (50% - col-span-5) */}
          {/* Thay bằng mã màu trực tiếp bg-[#efebe9] */}
          <div className="col-span-5 h-full bg-[#efebe9] p-4 border rounded-lg shadow-sm">
            <ProductGrid />
          </div>
          
          {/* CỘT 3: Giỏ hàng cần báo giá (30% - col-span-3) */}
          <div className="col-span-3 h-full">
            <QuoteCart /> {/* Component mới chứa danh sách và form xác nhận */}
          </div>

        </div>
      </div>
    </>
  );
}