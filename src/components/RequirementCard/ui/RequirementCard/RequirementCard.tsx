import { Button, Card, Flex, Space, Typography } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { RequirementDto } from "@/dto/requirement.dto";

export interface RequirementCardProps {
  groupName?: string;
  requirement?: RequirementDto;
  onApply?: () => void;
  onDiscard?: () => void;
  onSkip?: () => void;
}

const Text = Typography;

const RequirementCard = (props: RequirementCardProps) => {
  const { groupName, requirement, onApply, onDiscard, onSkip } = props;

  return (
    <Card style={{ width: "100%", height: "500px" }}>
      <Text.Title style={{ textAlign: "center" }} level={2}>
        {requirement?.name}
      </Text.Title>
      {requirement?.notes && (
        <Flex align={"center"} gap={8}>
          <InfoCircleOutlined style={{ color: "blue" }} />
          <Text style={{ color: "gray", textAlign: "center" }}>
            {requirement?.notes}
          </Text>
        </Flex>
      )}
      <Flex justify={"center"} gap={8} style={{ marginTop: 16 }}>
        <Button
          type={"default"}
          style={{ borderColor: "orange", color: "orange" }}
          onClick={onSkip}
        >
          Пропустить
        </Button>
        <Button type={"default"} danger onClick={onDiscard}>
          Не соответствует
        </Button>
        <Button
          type={"default"}
          style={{ borderColor: "forestgreen", color: "forestgreen" }}
          onClick={onApply}
        >
          Соответствует
        </Button>
      </Flex>
    </Card>
  );
};

export default RequirementCard;
