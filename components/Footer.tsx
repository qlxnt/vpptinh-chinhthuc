import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Cột 1: Thông tin cửa hàng */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4 border-b-2 border-red-600 pb-2 inline-block">
            Văn Phòng Phẩm Tịnh
          </h3>
          <p className="font-bold text-red-500 mb-2">Cửa hàng Oanh 177</p>
          <ul className="space-y-2 text-sm">
            <li>📍 Địa chỉ: [Điền địa chỉ cửa hàng của bạn vào đây]</li>
            <li>📞 Hotline/Zalo sỉ: 090xxxxxxx</li>
            <li>📧 Email: lienhe@vpptinh.com</li>
          </ul>
        </div>

        {/* Cột 2: Chính sách & Hỗ trợ */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4 border-b-2 border-red-600 pb-2 inline-block">
            Hỗ Trợ Khách Hàng
          </h3>
          <ul className="space-y-2 text-sm flex flex-col">
            <Link href="#" className="hover:text-red-500 transition">» Chính sách mua sỉ & chiết khấu</Link>
            <Link href="#" className="hover:text-red-500 transition">» Hướng dẫn đặt hàng & thanh toán</Link>
            <Link href="#" className="hover:text-red-500 transition">» Chính sách giao hàng</Link>
            <Link href="#" className="hover:text-red-500 transition">» Chính sách đổi trả</Link>
          </ul>
        </div>

        {/* Cột 3: Giờ làm việc */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4 border-b-2 border-red-600 pb-2 inline-block">
            Giờ Hoạt Động
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Thứ 2 - Thứ 7: 07:30 - 18:00</li>
            <li>Chủ nhật: 08:00 - 12:00</li>
            <li className="text-yellow-500 mt-2 italic">Hỗ trợ báo giá Zalo 24/7</li>
          </ul>
        </div>

      </div>

      {/* Bản quyền */}
      <div className="container mx-auto px-4 mt-8 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Văn Phòng Phẩm Tịnh - Cửa hàng Oanh 177. All rights reserved.</p>
      </div>
    </footer>
  );
}