"use client";
import { Selector, SelectorOption } from "@/shared/UI/Selector";
import { memo, useEffect, useState } from "react";
import { fetchSecurityLevelsAction } from "@/app/api/security-levels/fetchSecurityLevels.action";
import { SecurityLevelDto } from "@/entities/SecurityLevel";

export interface SecurityLevelSelectorProps {
  placeholder?: string;
}

export const SecurityLevelSelector = memo(
  (props: SecurityLevelSelectorProps) => {
    const { placeholder } = props;
    const [options, setOptions] = useState<SelectorOption[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(true);
      fetchSecurityLevelsAction()
        .then((data) => {
          const options = data.map(
            (value: SecurityLevelDto): SelectorOption => {
              return { value: value.id!, label: <div>{value.name}</div> };
            },
          );

          setOptions(options);
        })
        .finally(() => setLoading(false));
    }, []);

    return (
      <Selector
        placeholder={placeholder}
        options={options}
        loading={loading}
        allowClear
        showSearch
      />
    );
  },
);
