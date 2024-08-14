"use client";

import { memo } from "react";
import { BlankDto } from "@/entities/Blank";
import { Card } from "antd";

export interface BlankItemProps {
  blank: BlankDto;
  onClick?: (id: string) => void;
}

const BlankItem = memo((props: BlankItemProps) => {
  const { blank, onClick } = props;

  return <Card style={{ margin: 4, height: 100 }}>{blank.name}</Card>;
});

export default BlankItem;
