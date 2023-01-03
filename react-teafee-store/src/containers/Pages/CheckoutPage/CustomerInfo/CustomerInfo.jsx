import styles from "./CustomerInfo.module.scss";

const CustomerInfo = () => {
  return (
    <div className={styles.CustomerInfo}>
      <h2 className={styles.Info_Header}>Customer Information</h2>
      <div className={styles.Info}>
        <label className={styles.Info_Items}>
          First Name
          <input
            className={styles.Info_Input}
            type="text"
            name="firstName"
            placeholder="John"
            required
          />
        </label>
        <label className={styles.Info_Items}>
          Last Name
          <input
            className={styles.Info_Input}
            type="text"
            name="lastName"
            placeholder="Smith"
            required
          />
        </label>
        <label className={styles.Info_Items}>
          Email
          <input
            className={styles.Info_Input}
            type="text"
            name="email"
            placeholder="example@example.com"
          />
        </label>
        <label className={styles.Info_Items}>
          Address
          <input
            className={styles.Info_Input}
            type="text"
            name="address"
            placeholder="123 Example St"
          />
        </label>
        <label className={styles.Info_Items}>
          Select Country
          <select className={styles.Info_Input}>
            <option value="" hidden>
              Select...
            </option>
            <option value="Australia">Australia</option>
            <option value="New Zealand">New Zealand</option>
          </select>
        </label>
        <label className={styles.Info_Items}>
          Town/City
          <input
            className={styles.Info_Input}
            type="text"
            name="town/city"
            placeholder="Sydney"
            required
          />
        </label>
        <label className={styles.Info_Items}>
          Country/State/Territory
          <select className={styles.Info_Input}>
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
        <label className={styles.Info_Items}>
          PostCode
          <input
            className={styles.Info_Input}
            type="text"
            name="postCode"
            placeholder="0000"
            required
          />
        </label>
      </div>
    </div>
  );
};

export default CustomerInfo;
