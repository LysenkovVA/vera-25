import React from "react";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import AppHeader from "@/shared/UI/AppHeader";

/**
 * Layout для страниц авторизованного пользователя
 * @param children
 * @constructor
 */
export default function UserLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center", height: "80px" }}>
        <AppHeader />
      </Header>
      <Content
        style={{
          width: "80%",
          height: "calc(100vh - 80px)",
          backgroundColor: "lightgray",
          padding: 16,
          margin: "0 auto",
        }}
      >
        <main>{children}</main>
      </Content>
    </Layout>
  );
}
