import styles from "./CoffeeCard.module.scss";
import { useState } from "react";
import { useEffect } from "react";
import { getCoffeeData } from "../../services/CoffeeData";

const CoffeeCard = () => {
  const [coffeeData, setCoffeeData] = useState([]);

  useEffect(() => {
    const coffeeWrapper = async () => {
      const allData = await getCoffeeData();
      setCoffeeData(allData);
    };
    coffeeWrapper();
  });
  return (
    <div className={styles.Card}>
      {coffeeData.length > 0 &&
        coffeeData.map((data) => {
          return <h3>{data.productName}</h3>;
        })}
    </div>
  );
};

export default CoffeeCard;
