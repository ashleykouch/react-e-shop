import styles from "./CoffeeList.module.scss";
import CoffeeCard from "../../../components/Cards/CoffeeCard/CoffeeCard";

const CoffeeList = ({ coffee }) => {
  return (
    <div className={styles.List}>
      <h2>CoffeeList</h2>
      <div className={styles.List_Card}>
        {coffee &&
          coffee.map((coffees) => {
            return <CoffeeCard key={coffees.id} coffees={coffee} />;
          })}
      </div>
    </div>
  );
};

export default CoffeeList;
