"use client";
import { lockScroll, randomInteger } from "@/lib/helper";
import Button from "@/ui/Button";
import CheckBox from "@/ui/CheckBox";
import React, {
  FC,
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import dynamic from "next/dynamic";

const FeedbackModal = dynamic(
  () => import("@/components/Modals/FeedbackModal"),
  { ssr: false }
);

const ChooseNameForm: FC<{ users: string[] | [] }> = ({ users }) => {
  const [activeName, setActiveName] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setActiveName(users[randomInteger(0, 2)]);
  }, [users]);

  const changeActiveName = useCallback(
    (name: string) => setActiveName(name),
    []
  );

  const viewCheckbox = useMemo(
    () =>
      users.map((item) => (
        <CheckBox
          key={item}
          onChange={() => changeActiveName(item)}
          label={item}
          checked={item === activeName}
          className="shadow-default h-[88px] px-[10px] py-8 rounded-2xl gap-2 flex items-center cursor-pointer"
        />
      )),
    [activeName, changeActiveName, users]
  );

  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    lockScroll(true);
    setOpen(true);
  }, []);

  const onClose = useCallback(() => {
    lockScroll(false);
    setOpen(false);
  }, []);

  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">{viewCheckbox}</div>
        <Button disabled={!activeName} type="submit" className="max-w-full">
          Get VPN
        </Button>
      </form>
      <FeedbackModal open={open} onClose={onClose} name={activeName} />
    </>
  );
};

export default ChooseNameForm;
