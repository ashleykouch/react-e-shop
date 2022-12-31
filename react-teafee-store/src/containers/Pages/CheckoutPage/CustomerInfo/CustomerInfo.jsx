import styles from "./CustomerInfo.module.scss";

const CustomerInfo = () => {
  return (
    <div>
      <h2>Customer Information</h2>
      <div>
        <label>
          First Name
          <input type="text" name="firstName" placeholder="John" required />
        </label>
        <label>
          Last Name
          <input type="text" name="lastName" placeholder="Smith" required />
        </label>
        <label>
          Email
          <input type="text" name="email" placeholder="example@example.com" />
        </label>
        <label>
          Address
          <input type="text" name="address" placeholder="123 Example St" />
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

export default CustomerInfo;
