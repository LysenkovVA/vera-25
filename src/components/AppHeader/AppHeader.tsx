"use client";

import { Button, Flex, Menu, MenuProps, Space } from "antd";
import SignOutButton from "@/components/AppHeader/SignOutButton";
import { HeaderItems } from "@/components/AppHeader/HeaderItems";
import { PlusCircleOutlined } from "@ant-design/icons";
import NewBlancButton from "@/components/NewBlancButton";

// type MenuItem = Required<MenuProps>["items"][number];
//
// const items: MenuItem[] = new Array(3).fill(null).map((_, index) => ({
//   key: index + 1,
//   label: `Item ${index + 1}`,
// }));

const AppHeader = () => {
  return (
    <Space align={"center"} size={"small"}>
      <NewBlancButton />
      <Menu
        // theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={HeaderItems}
        style={{ flex: 1, minWidth: 0 }}
      />
      <SignOutButton />
    </Space>
  );
};

export default AppHeader;
