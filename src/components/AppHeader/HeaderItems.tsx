import { MenuProps } from "antd";
import { DatabaseOutlined, PlusCircleOutlined } from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

export const HeaderItems: MenuItem[] = [
  {
    key: 1,
    label: `Коллекция`,
    icon: <DatabaseOutlined />,
  },
];
