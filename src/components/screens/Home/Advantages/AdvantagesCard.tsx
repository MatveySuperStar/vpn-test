import React, { FC, ReactNode } from "react";

interface IParams {
  readonly title: string;
  readonly subtitle: string;
  readonly icon: ReactNode;
}

const AdvantagesCard: FC<IParams> = ({ title, subtitle, icon }) => {
  const arrayTitle = title.split(" ");

  const firstTitle = arrayTitle[0];
  const secondTitle = arrayTitle.slice(1).join(" ");

  return (
    <div>
      {icon}
      <div>
        <h3 className="title-1 text-orange uppercase">
          {firstTitle} <br />
          <span className="text-blue">{secondTitle}</span>
        </h3>
        <p className="subtitle text-center">{subtitle}</p>
      </div>
    </div>
  );
};

export default AdvantagesCard;
