import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ReactNode } from "react";
import AuthProvider from "@/shared/lib/Providers/AuthProvider";
import { ConfigProvider } from "antd";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Бланки-25",
  description: "Система учета",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <ConfigProvider>
          <AuthProvider>
            <AntdRegistry>{children}</AntdRegistry>
          </AuthProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}
