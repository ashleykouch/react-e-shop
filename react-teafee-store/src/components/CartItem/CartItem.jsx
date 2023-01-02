import { useEffect, useState } from "react";
import styles from "./CartItem.module.scss";

const CartItem = ({ carts }) => {
  // function to delete product (unmount)

  const [isMounted, setIsMounted] = useState(true);

  const handleClick = () => {
    setIsMounted(!isMounted);
  };

  useEffect(() => {
    console.log(`isMounted has changed to ${isMounted}`);
  }, [isMounted]);

  // handle quantity

  const [qty, setQty] = useState(1);

  const handleIncrement = () => {
    setQty(qty + 1);
  };

  const handleDecrement = () => {
    setQty(qty - 1);
  };

  return (
    <>
      <span className={styles.LineBreak}>
        <hr />
      </span>
      {isMounted ? (
        <div className={styles.Cart}>
          <div className={styles.Cart_Image}>
            <img src={carts.productImg} />
          </div>
          <div className={styles.Cart_Items}>
            <h3>{carts.productName}</h3>
            <p>{carts.productBrand}</p>
          </div>
          <div className={styles.Cart_Counter}>
            <button
              className={styles.Cart_Counter_Btn}
              onClick={handleDecrement}
            >
              -
            </button>
            <div>{qty}</div>
            <button
              className={styles.Cart_Counter_Btn}
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
          <h3>${carts.productPrice}</h3>
          <button onClick={handleClick}>X</button>
        </div>
      ) : (
        <div className={styles.RemovedItem}>
          <p>Item Removed</p>
        </div>
      )}
      <div></div>
    </>
  );
};

export default CartItem;
