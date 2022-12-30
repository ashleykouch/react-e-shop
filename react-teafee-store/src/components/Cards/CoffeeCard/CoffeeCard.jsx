import { NavLink } from "react-router-dom";
import styles from "./CoffeeCard.module.scss";

const CoffeeCard = ({ coffees, addToCart }) => {
  console.log(coffees, "data");
  return (
    <>
      <NavLink to={`/coffee/${coffees.id}`}>
        <div className={styles.Card}>
          <img src={coffees.productImg} alt="coffee-img" />
          <h2>{coffees.productName}</h2>
          <h3>{coffees.productBrand}</h3>
          <p>${coffees.productPrice}</p>
        </div>
      </NavLink>
      <div>
        <button
          className={styles.AddToCartBtn}
          onClick={() => addToCart(coffees)}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default CoffeeCard;
