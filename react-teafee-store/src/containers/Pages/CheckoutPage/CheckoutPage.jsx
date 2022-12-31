import BillingAddress from "./BillingAddress/BillingAddress";
import CustomerInfo from "./CustomerInfo/CustomerInfo";
import PaymentInfo from "./PaymentInfo/PaymentInfo";

const CheckoutPage = () => {
  return (
    <div>
      <h1> Checkout</h1>
      <div>
        <p>Please fill in required fields *</p>
      </div>
      <CustomerInfo />
      <PaymentInfo />
      <BillingAddress />
      <div>
        <button>Complete Checkout and Pay</button>
      </div>
    </div>
  );
};

export default CheckoutPage;
