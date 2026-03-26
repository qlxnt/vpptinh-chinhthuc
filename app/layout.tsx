import type { Metadata } from "next";
import "./globals.css";
import { QuoteProvider } from "@/context/QuoteContext";

// Khai báo Header và Footer vừa tạo
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Văn Phòng Phẩm Tịnh - Cửa hàng Oanh 177",
  description: "Chuyên cung cấp sỉ lẻ văn phòng phẩm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="bg-[#fcf9f8] min-h-screen flex flex-col">
        <QuoteProvider>
          {/* 1. HIỆN HEADER Ở TRÊN CÙNG */}
          <Header />
          
          {/* 2. HIỆN NỘI DUNG 3 CỘT Ở GIỮA (Tự động kéo giãn để đẩy Footer xuống đáy) */}
          <main className="flex-1 w-full max-w-[1400px] mx-auto p-4 md:p-6">
            {children}
          </main>
          
          {/* 3. HIỆN FOOTER Ở DƯỚI CÙNG */}
          <Footer />
        </QuoteProvider>
      </body>
    </html>
  );
}