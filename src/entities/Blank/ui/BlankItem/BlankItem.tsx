"use client";

import { memo } from "react";
import { Blank } from "@/entities/Blank";
import { Card } from "antd";
import { useRouter } from "next/navigation";

export interface BlankItemProps {
  blank: Blank;
  onClick?: (id: string) => void;
}

const BlankItem = memo((props: BlankItemProps) => {
  const { blank, onClick } = props;

  const router = useRouter();

  return (
    <Card
      style={{ width: "100%", margin: 0, height: 100, cursor: "pointer" }}
      onClick={() => {
        router.push(`${process.env.NEXT_PUBLIC_BASE_PATH}/blanks/${blank.id}`);
      }}
    >
      {blank.name}
    </Card>
  );
});

export default BlankItem;
