import styles from "./CoffeeCard.module.scss";
import { useState } from "react";
import { useEffect } from "react";
import { getCoffeeData } from "../../../services/CoffeeData";

const CoffeeCard = ({ coffee }) => {
  return (
    <div className={styles.Card}>
      <h2>{coffee.productName}</h2>
      <p>{coffee.productBrand}</p>
      <p>{coffee.productPrice}</p>
    </div>
  );
  // return (
  //   <div className={styles.Card}>
  //     <h2>productName</h2>
  //     <h3>productBrand</h3>
  //     <p>productPrice</p>
  //   </div>
  // );
};

export default CoffeeCard;
