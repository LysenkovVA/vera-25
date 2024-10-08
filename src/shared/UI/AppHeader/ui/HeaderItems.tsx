import {
  DashboardOutlined,
  DatabaseOutlined,
  FileOutlined,
} from "@ant-design/icons"; // type MenuItem = Required<MenuProps>["items"][number];

// type MenuItem = Required<MenuProps>["items"][number];

export const HeaderItems = [
  {
    key: "1",
    label: `Бланки`,
    icon: <DatabaseOutlined />,
    target: "/blanks",
  },
  {
    key: "2",
    label: `Документы`,
    icon: <FileOutlined />,
    target: "/documents",
  },
  {
    key: "3",
    label: `Статистика`,
    icon: <DashboardOutlined />,
    target: "/dashboard",
  },
];
