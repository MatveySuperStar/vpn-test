import React, { FC } from "react";
import MainSection from "./MainSection";
import Advantages from "./Advantages";
import TrustTitle from "./TrustTitle";
import ChooseName from "./ChooseName";

const Home: FC<{ users: string[] | [] }> = ({ users }) => {
  return (
    <>
      <MainSection />
      <Advantages />
      <TrustTitle />
      <ChooseName users={users} />
    </>
  );
};

export default Home;
