import { NavLink } from "react-router-dom";
import styles from "./CoffeeCard.module.scss";

const CoffeeCard = ({ coffees, addToCart }) => {
  console.log(coffees, "data");
  return (
    <>
      <div>
        <div className={styles.Card}>
          <NavLink className={styles.Link} to={`/coffee/${coffees.id}`}>
            <div className={styles.Card_Image}>
              <img src={coffees.productImg} alt="coffee-img" />
            </div>
            <h3 className={styles.Card_Items}>{coffees.productName}</h3>
            <h4 className={styles.Card_Items}>{coffees.productBrand}</h4>
            <p className={styles.Card_Items}>${coffees.productPrice}</p>
          </NavLink>
          <button
            className={styles.AddToCartBtn}
            onClick={() => addToCart(coffees)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default CoffeeCard;
