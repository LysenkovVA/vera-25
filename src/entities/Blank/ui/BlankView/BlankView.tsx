"use client";
import React from "react";
import { Blank } from "@/entities/Blank";
import { Flex, Image, Typography } from "antd";

export interface BlankViewProps {
  blank: Blank;
}

const BlankView = (props: BlankViewProps) => {
  const { blank } = props;
  return (
    <Flex vertical align={"center"}>
      <Typography.Title>{blank.name}</Typography.Title>
      <Image
        src={""}
        alt={"image"}
        height={500}
        width={800}
        style={{
          borderColor: "black",
          borderWidth: 1,
        }}
      />
    </Flex>
  );
};

export default BlankView;
