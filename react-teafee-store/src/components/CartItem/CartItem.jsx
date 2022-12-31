import styles from "./CartItem.module.scss";

const CartItem = ({ carts }) => {
  return (
    <>
      <span className={styles.LineBreak}>
        <hr />
      </span>
      <div className={styles.Cart}>
        <div className={styles.Cart_Image}>
          <img src={carts.productImg} />
        </div>
        <div className={styles.Cart_Items}>
          <h3>{carts.productName}</h3>
          <p>{carts.productBrand}</p>
        </div>
        <p>Quantity</p>
        <h3>{carts.productPrice}</h3>
        <button>X</button>
      </div>
    </>
  );
};

export default CartItem;
