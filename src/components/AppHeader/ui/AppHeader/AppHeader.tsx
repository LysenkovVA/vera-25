"use client";

import { Button, Flex, Menu, MenuProps, Space } from "antd";
import SignOutButton from "@/components/AppHeader/ui/SignOutButton";
import { HeaderItems } from "@/components/AppHeader/ui/HeaderItems";
import { PlusCircleOutlined } from "@ant-design/icons";
import NewBlancButton from "@/components/NewBlancButton";
import { usePathname, useRouter } from "next/navigation";
import styles from "./AppHeader.module.scss";

const AppHeader = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className={styles.Container}>
      <NewBlancButton />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[
          HeaderItems.find((item) => item.target === pathname)?.key || "1",
        ]}
        items={HeaderItems}
        style={{ flex: 1, minWidth: 0, marginLeft: 16 }}
        onClick={(menuInfo) => {
          const { target } =
            HeaderItems.find((item) => item.key === menuInfo.key) || {};
          if (target) {
            router.push(target);
          }
        }}
      />
      <SignOutButton />
    </nav>
  );
};

export default AppHeader;
