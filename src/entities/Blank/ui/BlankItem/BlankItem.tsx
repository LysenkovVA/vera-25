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

  return <Card>{blank.name}</Card>;
});

export default BlankItem;
