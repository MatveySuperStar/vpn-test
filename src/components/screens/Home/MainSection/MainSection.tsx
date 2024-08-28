import Image from "next/image";
import React from "react";
import Button from "@/ui/Button";

import people from "@/public/home/people.png";
import WreathsIcon from "@/public/home/wreaths.svg";
import LocationIcon from "@/public/home/location.svg";
import ServersIcon from "@/public/home/servers.svg";

import styles from "./mainSection.module.scss";

const MainSection = () => {
  const listInfographics = [
    { icon: <LocationIcon />, title: "50+", subtitle: "Locations" },
    { icon: <ServersIcon />, title: "1000+", subtitle: "Servers" },
  ];

  const viewInfographics = listInfographics.map((item) => (
    <div key={item.title} className={styles.card}>
      {item.icon}
      <div>
        <h3 className="title-2">{item.title}</h3>
        <p className="capture">{item.subtitle}</p>
      </div>
    </div>
  ));

  return (
    <section id="main" className="max-md:px-0 overflow-hidden">
      <div className={styles.main}>
        <div>
          <h1 className="large-title text-center">
            Access everything <br />
            <span className="text-blue">securely with</span> <br />
            VPN
          </h1>
          <Image
            src={people}
            priority
            alt="people"
            className="md:ml-[30px] -ml-8 max-md:max-w-[calc(100%+90px)] max-md:min-h-[209px] object-cover "
          />
        </div>
        <Button href="#choose-name">Get VPN</Button>
        <WreathsIcon />
        <div className={`${styles.wrapperInfographics}`}>
          <div className={`${styles.infographics}`}>{viewInfographics}</div>
        </div>
        <p className="text-center">
          VPN-your <span className="text-blue">ultimate</span> solution for a
          private and secure online experience!
        </p>
      </div>
    </section>
  );
};

export default MainSection;
