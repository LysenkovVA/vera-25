import React from "react";
import { Radio, Row } from "antd";
import Icon from "@ant-design/icons";

const optionsTopRow = [
  { label: "TL", value: "TopLeft" },
  { label: "TM", value: "TopMiddle" },
  { label: "TR", value: "TopRight" },
];

const optionsMiddleRow = [
  { label: "ML", value: "MiddleLeft" },
  { label: "M", value: "Middle" },
  { label: "MR", value: "MiddleRight" },
];

const optionsBottomRow = [
  { label: "BL", value: "BottomLeft" },
  { label: "BM", value: "BottomMiddle" },
  { label: "BR", value: "BottomRight" },
];

const optionsCustomRow = [{ label: "Opt", value: "Custom" }];

const svgIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="#ffffff">
    <path
      d="M 6.992188 5.992188 C 6.945313 5.992188 6.902344 5.992188 6.859375 6 L 6 6 L 6 6.863281 C 5.988281 6.953125 5.988281 7.039063 6 7.128906 L 6 23 C 5.996094 23.359375 6.183594 23.695313 6.496094 23.878906 C 6.808594 24.058594 7.191406 24.058594 7.503906 23.878906 C 7.816406 23.695313 8.003906 23.359375 8 23 L 8 9.414063 L 42.292969 43.707031 C 42.542969 43.96875 42.917969 44.074219 43.265625 43.980469 C 43.617188 43.890625 43.890625 43.617188 43.980469 43.265625 C 44.074219 42.917969 43.96875 42.542969 43.707031 42.292969 L 9.414063 8 L 23 8 C 23.359375 8.003906 23.695313 7.816406 23.878906 7.503906 C 24.058594 7.191406 24.058594 6.808594 23.878906 6.496094 C 23.695313 6.183594 23.359375 5.996094 23 6 L 7.117188 6 C 7.074219 5.992188 7.03125 5.992188 6.992188 5.992188 Z"
      fill="#ffffff"
    />
  </svg>
);

const LocationSelector = () => {
  return (
    <>
      <Radio.Group
        style={{ alignItems: "center", justifyItems: "center" }}
        buttonStyle={"outline"}
      >
        <Row>
          <Radio.Button value="TopLeft">
            <Icon component={svgIcon} />
          </Radio.Button>
          <Radio.Button value="TopMiddle">TM</Radio.Button>
          <Radio.Button value="TopRight">TR</Radio.Button>
        </Row>
        <Row>
          <Radio.Button value="MiddleLeft">ML</Radio.Button>
          <Radio.Button value="Middle">Md</Radio.Button>
          <Radio.Button value="MiddleRight">MR</Radio.Button>
        </Row>
        <Row>
          <Radio.Button value="BottomLeft">BL</Radio.Button>
          <Radio.Button value="BottomMiddle">BM</Radio.Button>
          <Radio.Button value="BottomRight">BR</Radio.Button>
        </Row>
        <Row>
          <Radio.Button style={{ margin: "auto" }} value="Custom">
            Custom
          </Radio.Button>
        </Row>
      </Radio.Group>
    </>
  );
};

export default LocationSelector;
