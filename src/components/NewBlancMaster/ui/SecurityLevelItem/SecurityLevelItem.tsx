import { Card } from "antd";
import { Typography } from "antd";
import styles from "./SecurityLevelItem.module.scss";

const { Text } = Typography;

export interface SecurityLevelItemProps {
  id: number;
  name: string;
  onClick?: (id: number) => void;
}

const SecurityLevelItem = (props: SecurityLevelItemProps) => {
  const { id, name, onClick } = props;

  return (
    <Card className={styles.Card} onClick={() => onClick?.(id)}>
      <Text className={styles.SecurityLevelItem}>{name}</Text>
    </Card>
  );
};

export default SecurityLevelItem;
