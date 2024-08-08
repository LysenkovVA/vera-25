"use client";

import { Menu } from "antd";
import { usePathname, useRouter } from "next/navigation";
import styles from "./AppHeader.module.scss";
import { HeaderItems } from "@/shared/UI/AppHeader/ui/HeaderItems";
import SignOutButton from "@/shared/UI/AppHeader/ui/SignOutButton";
import { NewBlankButton } from "@/features/NewBlankButton";

const AppHeader = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className={styles.Container}>
      <NewBlankButton />
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
