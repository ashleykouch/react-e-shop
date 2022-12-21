import styles from "./HomePage.module.scss";
import CoffeeList from "../../Lists/CoffeeList/CoffeeList";
import Home_Image from "../../../assets/main-img.gif";
import { useState } from "react";
import { useEffect } from "react";
import { getCoffeeData } from "../../../services/CoffeeData";

const HomePage = () => {
  // call the get data function when page mounts

  const [coffeeData, setCoffeeData] = useState([]);

  useEffect(() => {
    const coffeeWrapper = async () => {
      const allData = await getCoffeeData();
      setCoffeeData(allData);
    };
    coffeeWrapper();
  }, []);
  // useEffect wuth an empty watch list
  return (
    <div className={styles.Home}>
      <div className={styles.Home_Img}>
        <img src={Home_Image} alt="img-background" />
      </div>
      <CoffeeList coffee={coffeeData} />
    </div>
  );
};

export default HomePage;
