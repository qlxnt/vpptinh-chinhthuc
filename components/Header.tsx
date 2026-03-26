import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b bg-white shadow-sm sticky top-0 z-50">
      {/* Tăng py-4 lên py-10 (padding trên/dưới) để nhân đôi chiều cao */}
      <div className="container mx-auto px-4 py-10 flex items-center">
        
        {/* Logo / Tên thương hiệu: Tăng nhẹ kích cỡ lên text-4xl cho cân xứng với Header mới */}
        <Link href="/" className="text-4xl font-serif font-bold text-red-600 tracking-wide block">
          Cửa hàng Oanh 177
        </Link>
        
      </div>
    </header>
  );
}