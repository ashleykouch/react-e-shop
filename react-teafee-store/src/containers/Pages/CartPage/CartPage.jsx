import CartItem from "../../../components/CartItem/CartItem";
import styles from "./CartPage.module.scss";

const CartPage = ({ cart }) => {
  return (
    <div className={styles.Container}>
      <h2>Cart Page</h2>
      {cart &&
        cart.map((carts) => {
          return <CartItem carts={carts} />;
        })}
    </div>
  );
};

export default CartPage;
