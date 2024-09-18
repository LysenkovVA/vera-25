"use client";
import { Selector, SelectorOption } from "@/shared/UI/Selector";
import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/storeHooks";

import { Typography } from "antd";
import { BlockCornersDesign } from "@/entities/BlockCornersDesign";
import {
  getBlockCornersDesignsList,
  getBlockCornersDesignsListError,
  getBlockCornersDesignsListIsInitialized,
  getBlockCornersDesignsListIsLoading,
} from "../model/selectors/blockCornersDesignsList.selectors";
import { fetchBlockCornersDesignsListService } from "@/features/BlockCornerDesignSelector/model/services/fetchBlockCornersDesignsList/fetchBlockCornersDesignsListService";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { blockCornersDesignsListReducer } from "@/features/BlockCornerDesignSelector";

export interface BlockCornersDesignSelectorProps {
  placeholder?: string;
  value?: any;
  onChange?: (value: any) => void;
}

export const BlockCornersDesignSelector = memo(
  (props: BlockCornersDesignSelectorProps) => {
    const { placeholder, value, onChange } = props;

    const reducers: ReducersList = {
      blockCornersDesignsList: blockCornersDesignsListReducer,
    };

    const dispatch = useAppDispatch();
    const data = useAppSelector(getBlockCornersDesignsList.selectAll);
    const loading = useAppSelector(getBlockCornersDesignsListIsLoading);
    const error = useAppSelector(getBlockCornersDesignsListError);
    const isInitialized = useAppSelector(
      getBlockCornersDesignsListIsInitialized,
    );

    useEffect(() => {
      if (!isInitialized && !loading) {
        dispatch(fetchBlockCornersDesignsListService({ replaceData: true }));
      }
    }, [isInitialized, dispatch, loading, data]);

    const opts = data.map((value: BlockCornersDesign): SelectorOption => {
      return { value: value.id!, label: <div>{value.name}</div> };
    });

    return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
        <Selector
          placeholder={placeholder}
          disabled={!!error}
          status={error ? "error" : undefined}
          options={opts}
          loading={loading}
          allowClear
          showSearch
          value={value}
          onChange={(value: any) => {
            onChange?.(value);
          }}
        />
        {error && <Typography.Text>{error}</Typography.Text>}
      </DynamicModuleLoader>
    );
  },
);
