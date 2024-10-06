"use client";

import { Flex, Image } from "antd";
import logo from "@/shared/assets/png/logo.png";
import styles from "./AppLogo.module.scss";

const AppLogo = () => {
  return (
    <Flex align={"center"} gap={4} vertical>
      <Image
        rootClassName={styles.Image}
        src={logo.src}
        alt={"logo"}
        preview={false}
      />
      <div className={styles.Text}>Допуск-ЗПП</div>
    </Flex>
  );
};

export default AppLogo;
