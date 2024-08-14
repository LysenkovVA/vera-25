"use client";
import { Flex, Spin, SpinProps } from "antd";
import { memo } from "react";

export interface LoadingIndicatorProps extends SpinProps {}

const LoadingIndicator = memo((props: LoadingIndicatorProps) => {
  return (
    <Flex align={"center"} justify={"center"}>
      <Spin {...props}>{props.children}</Spin>
    </Flex>
  );
});

export default LoadingIndicator;
