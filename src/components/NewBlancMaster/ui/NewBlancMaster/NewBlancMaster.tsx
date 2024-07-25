import { useState } from "react";
import { Button, message, StepProps, Steps, theme } from "antd";
import SecurityLevels from "@/components/NewBlancMaster/ui/SecurityLevels/SecurityLevels";

const steps = [
  {
    title: "Уровень защищенности",
    description: "Уровень защищенности",
    content: <SecurityLevels />,
  },
  {
    title: "Производитель",
    description: "",
    content: "Производитель",
  },
  {
    title: "Внешний вид",
    description: "",
    content: "Внешний вид",
  },
  {
    title: "Средства защиты",
    description: "",
    content: "Средства защиты",
  },
  {
    title: "Изображения",
    description: "",
    content: "Изображения",
  },
];

const items = steps.map((item) => ({
  key: item.title,
  title: item.title,
  description: item.description,
}));

const NewBlancMaster = () => {
  const [current, setCurrent] = useState(0);
  const { token } = theme.useToken();

  const contentStyle: React.CSSProperties = {
    // lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Далее
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Операция завершена!")}
          >
            Готово
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Назад
          </Button>
        )}
      </div>
    </>
  );
};

export default NewBlancMaster;
