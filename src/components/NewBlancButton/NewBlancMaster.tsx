import { useState } from "react";
import { Button, message, Steps, theme } from "antd";

const steps = [
  {
    title: "Уровень защищенности",
    content: "Уровень защищенности",
  },
  {
    title: "Производитель",
    content: "Производитель",
  },
  {
    title: "Внешний вид",
    content: "Внешний вид",
  },
  {
    title: "Средства защиты",
    content: "Средства защиты",
  },
  {
    title: "Изображения",
    content: "Изображения",
  },
];

const items = steps.map((item) => ({ key: item.title, title: item.title }));

const NewBlancMaster = () => {
  const [current, setCurrent] = useState(0);
  const { token } = theme.useToken();

  const contentStyle: React.CSSProperties = {
    lineHeight: "260px",
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
