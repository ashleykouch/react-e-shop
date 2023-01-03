import CoffeeList from "../../Lists/CoffeeList/CoffeeList";
import styles from "./CoffeePage.module.scss";
import CoffeeTypes from "../../../assets/types-of-coffee.png";

const CoffeePage = ({ coffee, addToCart }) => {
  return (
    <div className={styles.Page_Container}>
      <div className={styles.Page_Header}>
        <h1 className={styles.Page_Header_Title}>Coffee</h1>
      </div>
      <div className={styles.Page_Image}>
        <img src={CoffeeTypes} alt="coffee-types" />
      </div>
      <CoffeeList coffee={coffee} addToCart={addToCart} />
    </div>
  );
};

export default CoffeePage;
