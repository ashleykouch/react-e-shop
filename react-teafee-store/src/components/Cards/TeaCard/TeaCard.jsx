import styles from "./TeaCard.module.scss";
import { NavLink } from "react-router-dom";

const TeaCard = ({ teas }) => {
  return (
    <>
      <div>
        <div className={styles.Card}>
          <NavLink className={styles.Link} to={`/tea/${teas.id}`}>
            <div className={styles.Card_Image}>
              <img src={teas.productImg} alt="tea-img" />
            </div>
            <h3 className={styles.Card_Items}>{teas.productName}</h3>
            <h4 className={styles.Card_Items}>{teas.productBrand}</h4>
            <p className={styles.Card_Items}>{teas.productPrice}</p>
          </NavLink>
          <button className={styles.AddToCartBtn}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default TeaCard;
