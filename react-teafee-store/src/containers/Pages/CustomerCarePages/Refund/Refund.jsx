import styles from "./Refund.module.scss";

const Refund = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Container_Items}>
        <h1 className={styles.Container_MainHeader}>Refund Policy</h1>
        <h3>Last updated: 2023</h3>
      </div>
      <div className={styles.Container_Items}>
        <p>
          Thanks for shopping at Teafee. If you are not entirely satisfied with
          your purchase, we're here to help
        </p>
      </div>
      <div className={styles.Container_Items}>
        <h2 className={styles.Container_Items_Header}>Returns</h2>
        <p>
          You have 30 calendar days to return an item from the date you received
          it. To be eligible for a return, your item must be unused and in the
          same condition that you received it. Your item must be in the original
          packaging. Your item needs to have the receipt or proof of purchase.
        </p>
      </div>
      <div className={styles.Container_Items}>
        <h2 className={styles.Container_Items_Header}>Refunds</h2>
        <p>
          Once we receive your item, we will inspect it and notify you that we
          have received your returned item. We will immediately notify you on
          the status of your refund after inspecting the item.
          <br />
          <br />
          If your return is approved, we will initiate a refund to your credit
          card (or original method of payment). You will receive the credit
          within a certain amount of days, depending on your card issuer's
          policies.
        </p>
      </div>
      <div className={styles.Container_Items}>
        <h2 className={styles.Container_Items_Header}>Shipping</h2>
        <p>
          You will be responsible for paying for your own shipping costs for
          returning your item. Shipping costs are nonrefundable. If you receive
          a refund, the cost of return shipping will be deducted from your
          refund.
        </p>
      </div>
      <div className={styles.Container_Items}>
        <h2 className={styles.Container_Items_Header}>Contact Us</h2>
        <p>
          If you have any questions on how to return your item to us, contact
          us.
        </p>
      </div>
    </div>
  );
};

export default Refund;
