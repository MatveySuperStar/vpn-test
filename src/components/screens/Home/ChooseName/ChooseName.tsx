import React, { FC } from "react";
import ChooseNameForm from "./ChooseNameForm";

const ChooseName: FC<{ users: string[] | [] }> = ({ users }) => {
  return (
    <section id="choose-name">
      <div className="flex flex-col gap-4">
        <h2 className="title-1 uppercase">
          Choose <span className="text-blue">your Name</span>
        </h2>
        <ChooseNameForm users={users} />
      </div>
    </section>
  );
};

export default ChooseName;
