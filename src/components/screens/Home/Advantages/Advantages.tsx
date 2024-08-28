import React from "react";
import AdvantagesCard from "./AdvantagesCard";

import Icon1 from "@/public/home/icon-1.svg";
import Icon2 from "@/public/home/icon-2.svg";
import Icon3 from "@/public/home/icon-3.svg";
import Icon4 from "@/public/home/icon-4.svg";

import styles from "./advantages.module.scss";

const Advantages = () => {
  const listAdvantages = [
    {
      title: "Unlimited access to content",
      subtitle:
        "Enjoy unlimited bandwidth to stay connected to the world's best shows, apps, and games!",
      icon: <Icon1 />,
    },
    {
      title: "Flashing connecting speed",
      subtitle:
        "VPN Lumos offers unlimited bandwidth for faster loading and no buffering!",
      icon: <Icon2 />,
    },
    {
      title: "Hide your location",
      subtitle:
        "Get your own unique IP for added security and access to restricted sites, apps, and services!",
      icon: <Icon3 />,
    },
    {
      title: "Bypass blocked sites",
      subtitle: "Access any website safely and anonymously!",
      icon: <Icon4 />,
    },
  ];

  const viewAdvatages = listAdvantages.map((item) => (
    <AdvantagesCard key={item.title} {...item} />
  ));

  return (
    <section>
      <div className={styles.advatages}>{viewAdvatages}</div>
    </section>
  );
};

export default Advantages;
