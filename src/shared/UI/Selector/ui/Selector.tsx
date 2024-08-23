import { Select, SelectProps } from "antd";
import { memo, ReactNode } from "react";

export interface SelectorOption {
  value: string;
  label: ReactNode;
}

export interface SelectorProps extends Omit<SelectProps, "options" | "style"> {
  options: SelectorOption[];
}

export const Selector = memo((props: SelectorProps) => {
  const { options, ...restProps } = props;
  return (
    <Select
      {...restProps}
      style={{ width: "100%", textAlign: "start" }}
      options={options}
    />
  );
});
