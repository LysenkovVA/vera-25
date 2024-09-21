"use client";
import { Selector, SelectorOption } from "@/shared/UI/Selector";
import { memo } from "react";

export interface ComplianceSelectorProps {
  placeholder?: string;
  value?: any;
  onChange?: (value: any) => void;
}

export const ComplianceSelector = memo((props: ComplianceSelectorProps) => {
  const { placeholder, value, onChange } = props;

  const opts: SelectorOption[] = [
    { value: "Full", label: <div>{"Соответствует"}</div> },
    { value: "Partially", label: <div>{"Частично соответствует"}</div> },
    { value: "NotMatch", label: <div>{"Не соответствует"}</div> },
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
