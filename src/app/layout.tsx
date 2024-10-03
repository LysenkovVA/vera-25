import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ReactNode } from "react";
import AuthProvider from "@/shared/lib/Providers/AuthProvider";
import { ConfigProvider } from "antd";
// Локализация компонентов
import ru_RU from "antd/lib/locale/ru_RU";
import dayjs from "dayjs";
import { StoreProvider } from "@/shared/lib/Providers/StoreProvider";

var utc = require("dayjs/plugin/utc");

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Допуск-ЗПП",
  description: "Система учета",
};

// для локализации календаря
dayjs.locale("ru");
dayjs.extend(utc);

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        {/*Redux*/}
        <StoreProvider>
          {/*Auth JS*/}
          <AuthProvider>
            {/*Ant Design config provider*/}
            <ConfigProvider locale={ru_RU}>
              {/*Ant Design for Next JS*/}
              <AntdRegistry>{children}</AntdRegistry>
            </ConfigProvider>
          </AuthProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
