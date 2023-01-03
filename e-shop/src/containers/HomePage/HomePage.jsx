import styles from "./HomePage.module.scss";
import Home_Image from "../../assets/main-img.gif";
import { useEffect } from "react";
import { getCoffeeData } from "../../services/CoffeeData";
import { useState } from "react";
import CoffeeCard from "../../components/CoffeeCard/CoffeeCard";
import TeaCard from "../../components/TeaCard/TeaCard";

const HomePage = () => {
  // call the get data function when page mounts

  // useEffect wuth an empty watch list
  return (
    <div className={styles.Home}>
      <div className={styles.Home_Img}>
        <img src={Home_Image} alt="img-background" />
      </div>
      <div>
        <CoffeeCard />
        <TeaCard />
      </div>
    </div>
  );
};

export default HomePage;
