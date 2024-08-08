import { Drawer, DrawerProps } from "antd";
import { ReactNode } from "react";

export interface DrawerWrapperProps extends Omit<DrawerProps, "children"> {
  children?: ReactNode;
}

const DrawerWrapper = (props: DrawerWrapperProps) => {
  const { children, ...restProps } = props;
  return <Drawer {...restProps}>{children}</Drawer>;
};

export default DrawerWrapper;
