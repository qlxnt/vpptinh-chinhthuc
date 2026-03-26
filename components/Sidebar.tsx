'use client';

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-5 h-full">
      {/* CHỈ GIỮ LẠI GÓC TƯ VẤN (BLOG) */}
      <div className="bg-white rounded-md border border-[#e8d5cb] shadow-sm overflow-hidden flex-1">
        <h2 className="text-base font-bold text-gray-800 p-4 border-b border-[#e8d5cb]">
          Góc Tư Vấn
        </h2>
        
        <div className="p-4 flex flex-col gap-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex gap-3 items-start cursor-pointer group">
              <div className="w-12 h-12 bg-[#f4ebe6] flex-shrink-0 flex items-center justify-center text-xs text-[#8d6e63] font-medium rounded group-hover:bg-[#e8d5cb] transition">
                Blog
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-700 group-hover:text-[#8d6e63] transition line-clamp-2">
                  Bài viết tư vấn số {i}: Cách chọn văn phòng phẩm tiết kiệm cho doanh nghiệp...
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}