"use client";
import { Selector, SelectorOption } from "@/shared/UI/Selector";
import { memo } from "react";

export interface LocationSelectorProps {
  placeholder?: string;
  value?: any;
  onChange?: (value: any) => void;
}

export const LocationSelector = memo((props: LocationSelectorProps) => {
  const { placeholder, value, onChange } = props;

  const opts: SelectorOption[] = [
    { value: "TopLeft", label: <div>{"Сверху слева"}</div> },
    { value: "TopMiddle", label: <div>{"Сверху в середине"}</div> },
    { value: "TopRight", label: <div>{"Сверху справа"}</div> },
    { value: "MiddleLeft", label: <div>{"Слева в середине"}</div> },
    { value: "Middle", label: <div>{"В центре"}</div> },
    { value: "MiddleRight", label: <div>{"Справа в середине"}</div> },
    { value: "BottomLeft", label: <div>{"Снизу слева"}</div> },
    { value: "BottomMiddle", label: <div>{"Снизу в середине"}</div> },
    { value: "BottomRight", label: <div>{"Снизу справа"}</div> },
    { value: "Custom", label: <div>{"Другое"}</div> },
  ];

  return (
    <>
      <Selector
        placeholder={placeholder}
        options={opts}
        allowClear
        showSearch
        value={value}
        onChange={(value: any) => {
          onChange?.(value);
        }}
      />
    </>
  );
});
