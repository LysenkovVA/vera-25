"use client";

import { memo } from "react";
import { Blank } from "@/entities/Blank";
import { Card } from "antd";
import { useRouter } from "next/navigation";
import EditBlankButton from "@/features/EditBlankButton/ui/EditBlankButton";

export interface BlankItemProps {
  blank: Blank;
  onClick?: (id: string) => void;
}

const BlankItem = memo((props: BlankItemProps) => {
  const { blank, onClick } = props;

  const router = useRouter();

  return (
    <Card
      title={<EditBlankButton blankId={blank.id} />}
      style={{ width: "100%", margin: 0, height: 200, cursor: "pointer" }}
      // onClick={() => {
      //   router.push(`${process.env.NEXT_PUBLIC_BASE_PATH}/blanks/${blank.id}`);
      // }}
    >
      {blank.name}
    </Card>
  );
});

export default BlankItem;
