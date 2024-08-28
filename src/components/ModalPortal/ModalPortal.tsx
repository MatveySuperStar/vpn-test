"use client";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";

interface IModalPortal {
  readonly children: ReactNode;
  readonly open: boolean;
  readonly onClose?: () => void;
  readonly isVisibleHeader?: boolean;
  readonly className?: string;
}

const ModalPortal: FC<IModalPortal> = ({
  children,
  open = false,
  onClose = () => {},
  isVisibleHeader = false,
  className = "",
}) => {
  return createPortal(
    <div
      className={`fixed top-0 left-0  w-full h-full [&>div:nth-child(2)]:z-[4] [&>div:nth-child(2)]:absolute ${
        open ? " visible" : " invisible"
      } ${isVisibleHeader ? "z-[98]" : "z-[9999]"}`}
    >
      <div
        className={`duration-500 absolute top-0 left-0 z-[3]  ${
          open ? "bg-[rgba(0,0,0,0.6)] w-full h-full opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      <div
        className={twMerge(
          "fixed bg-white left-1/2 -translate-x-1/2 duration-500 w-full h-full",
          open ? "top-0" : "-top-full",
          className
        )}
      >
        {children}
      </div>
    </div>,
    document.querySelector("#custom-modal-root") as Element
  );
};

export default ModalPortal;
