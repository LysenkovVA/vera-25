import { MenuProps } from "antd";
import {
  DatabaseOutlined,
  FileProtectOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

export const HeaderItems = [
  {
    key: "1",
    label: `Коллекция`,
    icon: <DatabaseOutlined />,
    target: "/collection",
  },
  {
    key: "2",
    label: `Документы`,
    icon: <FileProtectOutlined />,
    target: "/documents",
  },
];
