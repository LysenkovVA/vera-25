import {
  DashboardOutlined,
  DatabaseOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";

// type MenuItem = Required<MenuProps>["items"][number];

export const HeaderItems = [
  {
    key: "1",
    label: `Коллекция`,
    icon: <DatabaseOutlined />,
    target: "/collection",
  },
  {
    key: "2",
    label: `Документы (test)`,
    icon: <FileProtectOutlined />,
    target: "/documents",
  },
  {
    key: "3",
    label: `Статистика`,
    icon: <DashboardOutlined />,
    target: "/dashboard",
  },
];
