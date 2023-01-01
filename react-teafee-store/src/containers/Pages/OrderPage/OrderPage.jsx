import { Link } from "react-router-dom";
import styles from "./OrderPage.module.scss";

const OrderPage = () => {
  // create a function to generate a random string

  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  const generateOrderNum = (length) => {
    let result = " ";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  };

  const result = Math.random().toString(36).substring(2, 10).toUpperCase();

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <div className={styles.Order}>
      <div className={styles.Order_Header}>
        <h1>Order Confirmed!</h1>
      </div>
      <div className={styles.Order_Items}>
        <h2 className={styles.Order_Items_Header}>Order #{result}</h2>
        <h3 className={styles.Order_Items_Text}>
          Thank you for your purchase! Your order has been received.
        </h3>
        <h3 className={styles.Order_Items_Text}>Order Number: {result}</h3>
        <h3 className={styles.Order_Items_Text}>Order Date: {date} </h3>
      </div>
      <div className={styles.Order_Btn}>
        <Link to="/">
          <button>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default OrderPage;
