import React from "react";

const BillingAddress = () => {
  return (
    <div>
      <h2>Billing Address</h2>
      <div>
        <label>
          <input type="checkbox" name="same" />
          Billing address same as shipping
        </label>
        <label>
          Billing Name
          <input type="text" name="billingName" placeholder="John Smith" />
        </label>
        <label>
          Select Country
          <select>
            <option value="" hidden>
              Select...
            </option>
            <option value="Australia">Australia</option>
            <option value="New Zealand">New Zealand</option>
          </select>
        </label>
        <label>
          Address
          <input type="text" name="address" placeholder="123 Example St" />
        </label>
        <label>
          Town/City
          <input type="text" name="town/city" placeholder="Sydney" required />
        </label>
        <label>
          Country/State/Territory
          <select>
            <option value="" hidden>
              Select...
            </option>
            <option value="New South Wales">New South Wales</option>
            <option value="Queensland">Queensland</option>
            <option value="Melbourne">Melbourne</option>
            <option value="Brisbane">Brisbane</option>
            <option value="Perth">Perth</option>
            <option value="Adelaide">Adelaide</option>
            <option value="Auckland">Auckland</option>
            <option value="Hobart">Hobart</option>
            <option value="Wellington">Wellington</option>
          </select>
        </label>
        <label>
          PostCode
          <input type="text" name="postCode" placeholder="0000" required />
        </label>
      </div>
    </div>
  );
};

export default BillingAddress;
