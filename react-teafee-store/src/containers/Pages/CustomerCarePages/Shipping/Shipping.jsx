import styles from "./Shipping.module.scss";

const Shipping = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Container_Items}>
        <h1 className={styles.Container_MainHeader}>
          Shipping and Return Policy
        </h1>
        <h3>Last updated: 2023</h3>
      </div>
      <div className={styles.Container_Items}>
        <p>
          We are happy to offer free shipping on all orders within the United
          States. For international orders, we offer competitive rates through
          our preferred carriers.
          <br />
          <br />
          We strive to process and ship orders as quickly as possible, and in
          most cases, orders will be shipped within 1-2 business days. However,
          please note that there may be processing delays during high volume
          times such as sales events and holidays.
          <br />
          <br />
          If you need to cancel or modify your order, please contact us as soon
          as possible. We will make every effort to accommodate your request,
          but please note that once an order has been shipped, we are unable to
          make any changes.
          <br />
          <br />
          We accept returns of unworn, unwashed, undamaged or defective
          merchandise within 30 days of the original purchase date. Returns
          should be made in the original packaging, if possible.
          <br />
          <br />
          To initiate a return, please contact us with your order number and the
          reason for your return. We will provide you with further instructions
          on how to return your items.
          <br />
          <br />
          Please note that original shipping charges are non-refundable.
          Customers are responsible for paying for return shipping costs. If you
          receive a damaged or defective item, please contact us immediately so
          that we can help resolve the issue.
          <br />
          <br />
          We want you to be completely satisfied with your purchase. If you have
          any questions or concerns, please don't hesitate to contact us.
        </p>
      </div>
    </div>
  );
};

export default Shipping;
