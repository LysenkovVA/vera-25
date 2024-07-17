import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Бланки-25",
  description: "Система учета",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <SessionProvider>
          <AntdRegistry>{children}</AntdRegistry>
        </SessionProvider>
      </body>
    </html>
  );
}
