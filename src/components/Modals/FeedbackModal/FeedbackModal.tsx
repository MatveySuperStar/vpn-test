"use client";
import ModalPortal from "@/components/ModalPortal";
import { useResize } from "@/hooks/use-resize";
import React, { FC, FormEvent, useState } from "react";
import LockIcon from "@/public/icons/lock.svg";
import Input from "@/ui/Input";
import CloseIcon from "@/public/icons/close.svg";
import Button from "@/ui/Button";

interface IFeedbackModal {
  open: boolean;
  onClose: () => void;
  name: string;
  error?: {
    message?: string;
  };
}

const FeedbackModal: FC<IFeedbackModal> = ({ open, onClose, name }) => {
  const { isScreenLg } = useResize();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ email?: { message?: string } } | null>(
    null
  );

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const EMAIL_REGEXP =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    if (EMAIL_REGEXP.test(email.trim())) {
      console.log(email);
      setEmail("");
      onClose();
    } else {
      setErrors({ email: { message: "Incorrect mail" } });
    }
  };

  return (
    <ModalPortal
      isVisibleHeader={isScreenLg}
      open={open}
      onClose={onClose}
      className="pt-[24px] lg:pt-[138px]"
    >
      <div className="flex max-w-[892px] mx-auto flex-col px-4 gap-4 lg:gap-[21px]">
        <button className="ml-auto" onClick={onClose}>
          <CloseIcon />
        </button>
        <div className="flex flex-col gap-8">
          <h2 className="title-1 uppercase"> Your name</h2>
          <p className="body">{name}</p>
          <form onSubmit={onSubmit} className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <Input
                onFocus={() => setErrors(null)}
                error={errors?.["email"]}
                placeholder="Enter your email"
                value={email}
                onChange={setEmail}
              />
              <div className="flex gap-2 items-center">
                <LockIcon className="min-w-fit" />
                <p className="footnote text-grey">
                  Your information is 100% secure. We don’t share your personal
                  information.
                </p>
              </div>
            </div>
            <Button
              disabled={!!errors?.email}
              className="max-w-full"
              type="submit"
            >
              Continue
            </Button>
          </form>
        </div>
      </div>
    </ModalPortal>
  );
};

export default FeedbackModal;
