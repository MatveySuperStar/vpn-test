import React, { ChangeEvent } from "react";
import styles from "./input.module.scss";

interface IInput {
  placeholder?: string;
  error?: { message?: string } | null;
  className?: string;
  onFocus?: () => void;
  value: string;
  onChange: (value: string) => void;
}

const Input: React.FC<IInput> = ({
  error,
  className,
  onChange,
  ...setting
}) => {
  const changeValue = (e: ChangeEvent<HTMLInputElement>) => [
    onChange(e.target.value),
  ];

  return (
    <input
      onChange={changeValue}
      className={`${styles["default-input"]} ${
        error?.message ? styles.error : ""
      } ${className}`}
      {...setting}
    />
  );
};

export default Input;
