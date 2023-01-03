import CoffeeCard from "../../components/CoffeeCard/CoffeeCard";
import styles from "./CoffeePage.module.scss";

const CoffeePage = () => {
  return (
    <div className={styles.Container}>
      <CoffeeCard />
    </div>
  );
};

export default CoffeePage;
