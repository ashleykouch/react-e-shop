import React from "react";
import Select from "react-select";
import CustomerInfo from "./CustomerInfo/CustomerInfo";

const CheckoutPage = () => {
  return (
    <div>
      <h1> Checkout</h1>
      <div>
        <p>Please fill in required fields *</p>
      </div>
      <CustomerInfo />
    </div>
  );
};

export default CheckoutPage;
