import styles from "./CoffeeList.module.scss";
import CoffeeCard from "../../../components/Cards/CoffeeCard/CoffeeCard";

const CoffeeList = ({ coffee }) => {
  return (
    <div>
      <h1>Coffee</h1>
      <div className={styles.List}>
        <div className={styles.List_Card}>
          {coffee &&
            coffee.map((coffees) => {
              return <CoffeeCard key={coffees.id} coffees={coffees} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default CoffeeList;
