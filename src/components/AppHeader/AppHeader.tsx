"use client";

import { Menu, MenuProps } from "antd";
import SignOutButton from "@/components/AppHeader/SignOutButton";
import { HeaderItems } from "@/components/AppHeader/HeaderItems";

// type MenuItem = Required<MenuProps>["items"][number];
//
// const items: MenuItem[] = new Array(3).fill(null).map((_, index) => ({
//   key: index + 1,
//   label: `Item ${index + 1}`,
// }));

const AppHeader = () => {
  return (
    <>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={HeaderItems}
        style={{ flex: 1, minWidth: 0 }}
      />
      <SignOutButton />
    </>
  );
};

export default AppHeader;
