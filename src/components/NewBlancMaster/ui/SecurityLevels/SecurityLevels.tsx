import { fetchSecurityLevelsAction } from "@/actions/security-level/fetchSecurityLevelsAction";
import SecurityLevelItem from "@/components/NewBlancMaster/ui/SecurityLevels/SecurityLevelItem";
import { Flex } from "antd";

const SecurityLevels = async () => {
  const data = await fetchSecurityLevelsAction();

  if (!data) {
    return "No data!";
  }

  return (
    <Flex align={"center"} justify={"center"} gap={16}>
      {data.map((value: { id: number; name: string }) => (
        <SecurityLevelItem key={value.id} id={value.id} name={value.name} />
      ))}
    </Flex>
  );
};

export default SecurityLevels;
