import React from "react";

const CartItem = ({ carts }) => {
  return (
    <div>
      <h2>{carts.productName}</h2>
    </div>
  );
};

export default CartItem;
