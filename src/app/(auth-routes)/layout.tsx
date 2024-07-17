import React from "react";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import AppHeader from "@/components/AppHeader";

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
      <Header style={{ display: "flex", alignItems: "center" }}>
        <AppHeader />
      </Header>
      <Content
        style={{
          // display: "flex",
          // alignItems: "center",
          padding: 16,
          margin: "0 auto",
        }}
      >
        <main>{children}</main>
      </Content>
    </Layout>
  );
}
