import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; // 1. Gọi Footer vào đây
import { QuoteProvider } from "@/context/QuoteContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Văn Phòng Phẩm Tịnh - Cửa hàng Oanh 177",
  description: "Cung cấp văn phòng phẩm giá sỉ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <QuoteProvider>
          <div className="flex flex-col min-h-screen"> {/* Thêm flex để ép Footer xuống đáy */}
            <Header />
            <main className="flex-1 bg-gray-50">
              {children}
            </main>
            <Footer /> {/* 2. Đặt Footer ở dưới main */}
          </div>
        </QuoteProvider>
      </body>
    </html>
  );
}