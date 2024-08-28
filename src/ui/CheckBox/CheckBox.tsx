import styles from "./checkBox.module.scss";
import check from "@/public/icons/check.png";
import Image from "next/image";
import { FC } from "react";

interface ICheckbox {
  id?: string;
  label: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const CheckBox: FC<ICheckbox> = ({
  id = "",
  label = "Согласие на обработку персональных данных",
  className = "",
  ...setting
}) => {
  const inputId = id + "_" + label;

  return (
    <label htmlFor={inputId} className={`${styles.checkbox} ${className}`}>
      <div className={styles.container}>
        <input
          id={inputId}
          type="checkbox"
          checked={setting.checked}
          onChange={setting.onChange}
          readOnly={true}
        />
        <span className={styles.checkmark}>
          <Image width={13} height={13} src={check} alt="check" />
        </span>
      </div>
      <span className="subtitle ">{label}</span>
    </label>
  );
};

export default CheckBox;
