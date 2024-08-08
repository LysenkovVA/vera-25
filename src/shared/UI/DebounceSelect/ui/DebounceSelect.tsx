import { useDebounce } from "@/shared/lib/hooks/useDebounce/useDebounce";
import { EditOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Empty, Flex, Select, SelectProps, Spin, Tag } from "antd";
import { ReactNode, useCallback, useRef, useState } from "react";
import cls from "./DebounceSelect.module.scss";

export interface DebounceSelectValue {
  label: string | ReactNode;
  value: string;
}

export type DebounceSelectMode = "multiple" | "tags" | undefined;

export interface DebounceSelectProps<ValueType = any>
  extends Omit<SelectProps<ValueType | ValueType[]>, "options" | "children"> {
  fetchOptions: (search: string) => Promise<ValueType[]>;
  debounceTimeout?: number;
  onAddClick?: () => void;
  onEditClick?: (value: ValueType | null | undefined) => void;
}

export const DebounceSelect = <
  ValueType extends {
    key?: string;
    label: ReactNode | string;
    value: string | number;
  } = any,
>({
  className,
  fetchOptions,
  debounceTimeout = 800,
  mode,
  value,
  onAddClick,
  onEditClick,
  ...props
}: DebounceSelectProps<ValueType>) => {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState<ValueType[]>([]);
  const fetchRef = useRef(0);

  const loadOptions = useCallback(
    (value: string) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);

      fetchOptions(value).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }

        setOptions(newOptions);
        setFetching(false);
      });
    },
    [fetchOptions],
  );

  const debounceFetcher = useDebounce(loadOptions, debounceTimeout);

  // Тэги с кнопкой редактирования
  const tagRender: SelectProps["tagRender"] = (props) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        //color={value}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {onEditClick && (
          <EditOutlined
            className={cls.tagEditBtn}
            onClick={() => {
              // @ts-ignore
              const editValue: ValueType = { label, value };
              onEditClick?.(editValue);
            }}
          />
        )}
        {label}
      </Tag>
    );
  };

  return (
    <Flex rootClassName={cls.DebounceSelect} gap={4}>
      <Select
        labelInValue
        mode={mode}
        value={value}
        allowClear={true}
        filterOption={false}
        suffixIcon={null}
        onSearch={debounceFetcher}
        notFoundContent={fetching ? <Spin size="small" /> : <Empty />}
        {...props}
        options={options}
        tagRender={tagRender}
      />
      {onAddClick && (
        <PlusCircleOutlined className={cls.plusBtn} onClick={onAddClick} />
      )}
      {onEditClick && mode === undefined && (
        <EditOutlined
          className={cls.plusBtn}
          onClick={() => {
            if (value) {
              if (value instanceof Array) {
                onEditClick?.(value?.[0]);
              }

              onEditClick?.(value as ValueType);
            }
          }}
        />
      )}
    </Flex>
  );
};
