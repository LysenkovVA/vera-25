"use client";

import { Flex, Steps } from "antd";
import { useCallback, useState } from "react";
import RequirementCard from "@/components/RequirementsChecker/ui/RequirementCard/RequirementCard";
import { CheckCircleOutlined } from "@ant-design/icons";

import { RequirementGroupDto } from "@/entities/RequirementGroup/dto/requirement-group.dto";
import { StepStatus } from "@/entities/Requirement/dto/requirement.dto";

export interface DocumentRequirementContentProps {
  documentGroup?: RequirementGroupDto;
  onFinished?: () => void;
}

const DocumentRequirementContent = (props: DocumentRequirementContentProps) => {
  const { documentGroup, onFinished } = props;

  const [currentRequirement, setCurrentRequirement] = useState(0);

  const onChange = useCallback((value: number) => {
    setCurrentRequirement(value);
  }, []);

  const onButtonClick = useCallback(
    (stepStatus: StepStatus) => {
      if (currentRequirement === documentGroup?.requirements?.length! - 1) {
        onFinished?.();
        setCurrentRequirement(0);
      } else {
        documentGroup!.requirements![currentRequirement].stepStatus =
          stepStatus;
        setCurrentRequirement(currentRequirement + 1);
      }
    },
    [currentRequirement, documentGroup, onFinished],
  );

  if (!documentGroup) {
    return <div>No content</div>;
  }

  return (
    <Flex vertical justify={"center"} gap={0}>
      <Steps
        items={documentGroup.requirements?.map((requirement) => {
          return { title: requirement.position };
        })}
        progressDot={(iconDot, info) => {
          const status = documentGroup?.requirements?.[info.index].stepStatus;

          if (!status) {
            return <CheckCircleOutlined style={{ color: "gray" }} />;
          }

          switch (status) {
            case "applied":
              return <CheckCircleOutlined style={{ color: "green" }} />;
            case "declined":
              return <CheckCircleOutlined style={{ color: "red" }} />;
            case "skipped":
              return <CheckCircleOutlined style={{ color: "orange" }} />;

            default:
              return <CheckCircleOutlined style={{ color: "blue" }} />;
          }
        }}
        current={currentRequirement}
        onChange={onChange}
      />
      <RequirementCard
        requirement={documentGroup?.requirements?.[currentRequirement]}
        onApply={() => onButtonClick("applied")}
        onDiscard={() => onButtonClick("declined")}
        onSkip={() => onButtonClick("skipped")}
      />
    </Flex>
  );
};

export default DocumentRequirementContent;
