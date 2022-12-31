import { Link } from "react-router-dom";
import CartItem from "../../../components/CartItem/CartItem";
import CheckoutPage from "../CheckoutPage/CheckoutPage";
import styles from "./CartPage.module.scss";

const CartPage = ({ cart }) => {
  return (
    <>
      <div className={styles.Cart}>
        <div className={styles.Cart_Header}>
          <h2 className={styles.Cart_Header_Title}>Cart Page</h2>
        </div>
        {cart &&
          cart.map((carts) => {
            return <CartItem carts={carts} />;
          })}
      </div>
      <span className={styles.LineBreak}>
        <hr />
      </span>
      <div className={styles.Cart_Checkout}>
        <Link to="/checkout">
          <button>Checkout</button>
        </Link>
      </div>
    </>
  );
};

export default CartPage;
