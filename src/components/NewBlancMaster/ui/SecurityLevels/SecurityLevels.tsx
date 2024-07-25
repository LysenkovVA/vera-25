import { fetchSecurityLevelsAction } from "@/actions/security-level/fetchSecurityLevelsAction";
import SecurityLevelItem from "@/components/NewBlancMaster/ui/SecurityLevelItem/SecurityLevelItem";
import { Flex } from "antd";

export interface SecurityLevelsProps {
  onClick: (id: number) => void;
}

const SecurityLevels = async (props: SecurityLevelsProps) => {
  const { onClick } = props;

  const data = await fetchSecurityLevelsAction();

  if (!data) {
    return "No data!";
  }

  return (
    <Flex align={"center"} justify={"center"} gap={16}>
      {data.map((value: { id: number; name: string }) => (
        <SecurityLevelItem
          key={value.id}
          id={value.id}
          name={value.name}
          onClick={onClick}
        />
      ))}
    </Flex>
  );
};

export default SecurityLevels;
