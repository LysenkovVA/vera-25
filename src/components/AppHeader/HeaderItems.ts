import { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

export const HeaderItems: MenuItem[] = [
  {
    key: 1,
    label: `Коллекция`,
  },
];
