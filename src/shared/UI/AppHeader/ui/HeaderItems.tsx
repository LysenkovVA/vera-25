import { DashboardOutlined, DatabaseOutlined } from "@ant-design/icons"; // type MenuItem = Required<MenuProps>["items"][number];

// type MenuItem = Required<MenuProps>["items"][number];

export const HeaderItems = [
  {
    key: "1",
    label: `Коллекция`,
    icon: <DatabaseOutlined />,
    target: "/blanks",
  },
  {
    key: "2",
    label: `Панель управления`,
    icon: <DashboardOutlined />,
    target: "/dashboard",
  },
];
