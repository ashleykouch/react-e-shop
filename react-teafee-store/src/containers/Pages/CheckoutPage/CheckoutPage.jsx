import BillingAddress from "./BillingAddress/BillingAddress";
import CustomerInfo from "./CustomerInfo/CustomerInfo";
import PaymentInfo from "./PaymentInfo/PaymentInfo";
import styles from "./CheckoutPage.module.scss";
import { Link } from "react-router-dom";
import OrderSummary from "../../../components/Cards/OrderSummary/OrderSummary";

const CheckoutPage = ({ checkCart }) => {
  return (
    <div className={styles.Checkout}>
      <h1 className={styles.Checkout_Header}>Checkout</h1>
      <p className={styles.Checkout_Para}>Please fill in required fields *</p>
      <CustomerInfo />
      <PaymentInfo />
      <BillingAddress />
      <div className={styles.Checkout_Btn}>
        <Link to="/order">
          <button>Complete Checkout and Pay</button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutPage;
