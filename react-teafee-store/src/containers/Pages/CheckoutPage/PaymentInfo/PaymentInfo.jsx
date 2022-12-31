import styles from "./PaymentInfo.module.scss";

const PaymentInfo = () => {
  return (
    <div>
      <h2>Payment Info</h2>
      <div>
        <label>
          <input type="radio" name="credit" />
          Credit/Debit Card
        </label>
      </div>
      <label>
        Credit Card Number
        <input
          type="text"
          name="credit-num"
          placeholder="0000 1111 0000 111"
          required
        />
      </label>
      <label>
        Month
        <select>
          <option value="" hidden></option>
          <option value="january">January</option>
          <option value="february">February</option>
          <option value="march">March</option>
          <option value="april">April</option>
          <option value="may">May</option>
          <option value="june">June</option>
          <option value="july">July</option>
          <option value="august">August</option>
          <option value="september">September</option>
          <option value="october">October</option>
          <option value="november">November</option>
          <option value="december">December</option>
        </select>
      </label>
      <label>
        Year
        <select>
          <option value="" hidden></option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
          <option value="2028">2028</option>
          <option value="2029">2029</option>
          <option value="2030">2030</option>
        </select>
      </label>
      <label>
        Credit Card Number
        <input type="text" name="cvc" placeholder="123" required />
      </label>
    </div>
  );
};

export default PaymentInfo;
