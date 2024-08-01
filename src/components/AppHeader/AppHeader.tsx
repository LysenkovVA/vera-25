"use client";

import { Button, Flex, Menu, MenuProps, Space } from "antd";
import SignOutButton from "@/components/AppHeader/SignOutButton";
import { HeaderItems } from "@/components/AppHeader/HeaderItems";
import { PlusCircleOutlined } from "@ant-design/icons";
import NewBlancButton from "@/components/NewBlancButton";
import { usePathname, useRouter } from "next/navigation";

const AppHeader = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <NewBlancButton />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[
          HeaderItems.find((item) => item.target === pathname)?.key || "1",
        ]}
        items={HeaderItems}
        style={{ flex: 1, minWidth: 0 }}
        onClick={(menuInfo) => {
          const { target } =
            HeaderItems.find((item) => item.key === menuInfo.key) || {};
          if (target) {
            router.push(target);
          }
        }}
      />
      <SignOutButton />
    </>
  );
};

export default AppHeader;
