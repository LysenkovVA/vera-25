import React, { ReactNode } from "react";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";

type ItemType = {
  title: ReactNode;
  href: string;
};

const breadCrumbItems: ItemType[] = [
  {
    title: (
      <>
        <HomeOutlined /> {""}
      </>
    ),
    href: "/",
  },
  {
    title: "Коллекция",
    href: "/blanks",
  },
  {
    title: ":name",
    href: "/blanks/:id",
  },
];

export interface BlankBreadCrumbProps {
  id: string;
  name: string;
}

const BlankBreadCrumb = (props: BlankBreadCrumbProps) => {
  const { id, name } = props;
  return <Breadcrumb items={breadCrumbItems} params={{ name, id }} />;
};

export default BlankBreadCrumb;
