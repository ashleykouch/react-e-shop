import styles from "./HomePage.module.scss";
import CoffeeList from "../../Lists/CoffeeList/CoffeeList";
import Home_Image from "../../../assets/main-img.gif";
import { useState } from "react";
import { useEffect } from "react";
import { getCoffeeData } from "../../../services/CoffeeData";
import TeaList from "../../Lists/TeaList/TeaList";
import { getTeaData } from "../../../services/TeaData";
import Footer from "../../Footer/Footer";

const HomePage = ({ coffee, tea, addToCart }) => {
  // // coffee
  // // call the get data function when page mounts

  // const [coffee, setCoffee] = useState([]);

  // // useEffect wuth an empty watch list
  // useEffect(() => {
  //   const coffeeWrapper = async () => {
  //     const coffeeData = await getCoffeeData();
  //     setCoffee(coffeeData);
  //   };
  //   coffeeWrapper();
  // }, []);

  // // tea
  // // call the get data function when page mounts

  // const [tea, setTea] = useState([]);

  // // useEffect with an empty watch list
  // useEffect(() => {
  //   const teaWrapper = async () => {
  //     const teaData = await getTeaData();
  //     setTea(teaData);
  //   };
  //   teaWrapper();
  // }, []);

  return (
    <div className={styles.Home}>
      <div className={styles.Home_Img}>
        <img src={Home_Image} alt="img-background" />
      </div>
      <div className={styles.Home_Items}>
        <h1 className={styles.Home_Title_Coffee}>COFFEE</h1>
      </div>
      <CoffeeList coffee={coffee} addToCart={addToCart} />
      <div className={styles.Home_Items}>
        <h1 className={styles.Home_Title_Tea}>TEA</h1>
      </div>
      <TeaList tea={tea} />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
