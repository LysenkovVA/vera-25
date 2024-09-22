"use client";
import { Selector, SelectorOption } from "@/shared/UI/Selector";
import { memo } from "react";

import { ControlParameterValue } from "@/entities/ControlParameterValue";

export interface ControlParameterValueSelectorProps {
  data: ControlParameterValue[];
  placeholder?: string;
  value?: any;
  onChange?: (value: any) => void;
}

export const ControlParameterValueSelector = memo(
  (props: ControlParameterValueSelectorProps) => {
    const { placeholder, value, onChange, data } = props;

    // const reducers: ReducersList = {
    //   controlParameterValuesList: controlParameterValuesListReducer,
    // };

    // const dispatch = useAppDispatch();
    // const data = useAppSelector(getControlParameterValuesList.selectAll);
    // const loading = useAppSelector(getControlParameterValuesListIsLoading);
    // const error = useAppSelector(getControlParameterValuesListError);
    // const isInitialized = useAppSelector(
    //   getControlParameterValuesListIsInitialized,
    // );

    // useEffect(() => {
    //   if (!isInitialized && !loading) {
    //     dispatch(
    //       fetchControlParameterValuesListByControlParameterIdService({
    //         replaceData: true,
    //         controlParameterId,
    //       }),
    //     );
    //   }
    // }, [isInitialized, dispatch, loading, data, controlParameterId]);

    const opts = data.map((value: ControlParameterValue): SelectorOption => {
      return { value: value.id!, label: <div>{value.name}</div> };
    });

    return (
      <>
        <Selector
          placeholder={placeholder}
          // disabled={!!error}
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
