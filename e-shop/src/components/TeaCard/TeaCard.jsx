import { useEffect } from "react";
import { useState } from "react";
import { getTeaData } from "../../services/TeaData";
import styles from "./TeaCard.module.scss";

const TeaCard = () => {
  const [teaData, setTeaData] = useState([]);

  useEffect(() => {
    const teaWrapper = async () => {
      const allData = await getTeaData();
      setTeaData(allData);
    };
    teaWrapper();
  });
  return (
    <div className={styles.Card}>
      {teaData.length > 0 &&
        teaData.map((data) => {
          return <h3>{data.productName}</h3>;
        })}
    </div>
  );
};

export default TeaCard;
