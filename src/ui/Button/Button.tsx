"use client";
import React, { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import styles from "./button.module.scss";
import ClientAnchorLink from "../ClientAnchorLink";

interface IButton {
  readonly className?: string;
  readonly children: ReactNode;
  readonly disabled?: boolean;
  readonly type?: "button" | "submit";
  readonly theme?: "orange" | "blue";
  readonly onClick?: (() => void) | void;
  readonly href?: string;
}

const Button: FC<IButton> = ({
  className = "",
  children,
  disabled = false,
  type = "button",
  onClick = () => {},
  theme = "orange",
  href = "",
}) => {
  const defaultStyle = twMerge(
    styles["main-button"],
    styles[theme],
    "max-w-[270px] title-2"
  );

  if (href) {
    return (
      <ClientAnchorLink
        href={href}
        className={twMerge(defaultStyle, className, "button-small")}
        onClick={onClick}
      >
        {children}
      </ClientAnchorLink>
    );
  }

  return (
    <button
      type={type}
      className={twMerge(defaultStyle, className, "button-big")}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
