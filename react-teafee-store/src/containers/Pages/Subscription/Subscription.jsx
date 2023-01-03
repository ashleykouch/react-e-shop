import styles from "./Subscription.module.scss";
import { Link } from "react-router-dom";

const Subscription = () => {
  return (
    <div className={styles.Container}>
      <h1 className={styles.Container_Header}>Welcome!!!</h1>
      <h3 className={styles.Container_Para}>
        Thank you for subscribing! Get ready to access exclusive deals and
        receive latest news updates about our company.
      </h3>
      <Link to="/" className={styles.Container_Btn}>
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
};

export default Subscription;
