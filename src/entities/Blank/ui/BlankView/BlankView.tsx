"use client";
import React from "react";
import { Blank } from "@/entities/Blank";
import { Flex, Typography } from "antd";

export interface BlankViewProps {
  blank: Blank;
}

const BlankView = (props: BlankViewProps) => {
  const { blank } = props;
  return (
    <Flex vertical>
      {/*<EditBlankButton blank={blank} />*/}
      {JSON.stringify(blank, null, 2)}
      <Flex vertical align={"center"}>
        <Typography.Title>{blank.name}</Typography.Title>
        {/*<Image*/}
        {/*  src={""}*/}
        {/*  alt={"image"}*/}
        {/*  height={500}*/}
        {/*  width={800}*/}
        {/*  style={{*/}
        {/*    borderColor: "black",*/}
        {/*    borderWidth: 1,*/}
        {/*  }}*/}
        {/*/>*/}
      </Flex>
      {blank.blankTypeId ? (
        <Typography.Text>{blank.blankType?.id}</Typography.Text>
      ) : undefined}
      {blank.countryId ? (
        <Typography.Text>{blank.country?.name}</Typography.Text>
      ) : undefined}
      {blank.manufacturerId ? (
        <Typography.Text>{blank.manufacturer?.name}</Typography.Text>
      ) : undefined}
      {blank.securityLevelId ? (
        <Typography.Text>{blank.securityLevel?.name}</Typography.Text>
      ) : undefined}
    </Flex>
  );
};

export default BlankView;
