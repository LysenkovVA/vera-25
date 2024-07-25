export interface SecurityLevelItemProps {
  id: number;
  name: string;
}

const SecurityLevelItem = (props: SecurityLevelItemProps) => {
  const { id, name } = props;

  return <div style={{ border: "solid 1px black", padding: 16 }}>{name}</div>;
};

export default SecurityLevelItem;
