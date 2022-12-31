import styles from "./ProductNav.module.scss";
import CoffeeImg from "../../assets/coffee-image.jpeg";
import TeaImg from "../../assets/tea-image.jpeg";
import { NavLink } from "react-router-dom";

const ProductNav = () => {
  return (
    <div className={styles.Nav}>
      <div className={styles.Nav_Img}>
        <img src={CoffeeImg} alt="coffee-img" />
        <NavLink className={styles.Nav_Link_Coffee} to="/coffee">
          Shop Coffee
        </NavLink>
      </div>
      <div className={styles.Nav_Img}>
        <img src={TeaImg} alt="coffee-img" />
        <NavLink className={styles.Nav_Link_Tea} to="/tea">
          Shop Tea
        </NavLink>
      </div>
    </div>
  );
};

export default ProductNav;
