"use client";
import { Selector, SelectorOption } from "@/shared/UI/Selector";
import { memo, useEffect, useState } from "react";

import { ControlParameterValue } from "@/entities/ControlParameterValue";
import { useAppDispatch } from "@/shared/lib/hooks/storeHooks";
import { fetchControlParameterValuesListByControlParameterIdService } from "@/entities/ControlParameterValue/model/services/fetchControlParameterValuesListByControlParameterId/fetchControlParameterValuesListByControlParameterIdService";

export interface ControlParameterValueSelectorProps {
  controlParameterId: string;
  placeholder?: string;
  value?: any;
  onChange?: (value: any) => void;
}

export const ControlParameterValueSelector = memo(
  (props: ControlParameterValueSelectorProps) => {
    const { placeholder, value, onChange, controlParameterId } = props;

    const [data, setData] = useState<ControlParameterValue[]>([]);

    const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(
        fetchControlParameterValuesListByControlParameterIdService({
          replaceData: true,
          controlParameterId,
        }),
      )
        .unwrap()
        .then((values) => {
          setData(values);
        });
    }, []);

    const opts = data.map((value: ControlParameterValue): SelectorOption => {
      return { value: value.id!, label: <div>{value.name}</div> };
    });

    return (
      <>
        <Selector
          placeholder={placeholder}
          //disabled={!!error}
          // status={error ? "error" : undefined}
          options={opts}
          // loading={loading}
          allowClear
          showSearch
          value={value}
          onChange={(value: any) => {
            onChange?.(value);
          }}
        />
        {/*{error && <Typography.Text>{error}</Typography.Text>}*/}
      </>
    );
  },
);
