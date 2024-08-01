import { Spin, SpinProps } from "antd";

export interface LoadingIndicatorProps extends SpinProps {}

const LoadingIndicator = (props: LoadingIndicatorProps) => {
  return <Spin {...props}>{props.children}</Spin>;
};

export default LoadingIndicator;
