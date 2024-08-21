"use client";
import { memo } from "react";
import styles from "./SearchBar.module.scss";
import { Input } from "antd";

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch?: (value: string) => void;
}

const SearchBar = memo((props: SearchBarProps) => {
  const { value, onChange, onSearch } = props;

  return (
    <Input.Search
      placeholder={"Найти..."}
      className={styles.SearchBar}
      value={value}
      onChange={(value) => onChange(value.target.value)}
      onSearch={onSearch}
    />
  );
});

export default SearchBar;
