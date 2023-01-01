import styles from "./Terms.module.scss";

const Terms = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Container_Items}>
        <h1 className={styles.Container_MainHeader}>Terms and Conditions</h1>
        <h3>Last updated: 2023</h3>
      </div>
      <div className={styles.Container_Items}>
        <p>
          By accessing or using our website, you agree to be bound by these
          Terms and Conditions and our Privacy Policy. If you do not agree with
          any of these terms, please do not use our website.
          <br />
          <br />
          We reserve the right to update or modify these Terms and Conditions at
          any time without prior notice. Your continued use of our website
          following the posting of changes constitutes your acceptance of those
          changes.
          <br />
          <br />
          Our website is intended for personal use only. You may not use our
          website for any commercial purpose without our express written
          consent.
          <br />
          <br />
          You are responsible for maintaining the confidentiality of your
          account and password and for restricting access to your computer. You
          agree to accept responsibility for all activities that occur under
          your account or password.
          <br />
          <br />
          We reserve the right to refuse service, terminate accounts, or cancel
          orders at our sole discretion.
          <br />
          <br />
          We do not warrant that our website or the information, content,
          materials, or products included on our website will be error-free or
          uninterrupted. We will not be liable for any damages of any kind
          arising from the use of our website, including, but not limited to,
          direct, indirect, incidental, punitive, and consequential damages.
          <br />
          <br />
          By using our website, you agree to indemnify and hold us and our
          affiliates, officers, agents, and employees harmless from any claim or
          demand, including reasonable attorneys' fees, made by any third party
          due to or arising out of your use of our website, your violation of
          these Terms and Conditions, or your violation of any rights of
          another.
          <br />
          <br />
          These Terms and Conditions constitute the entire agreement between you
          and us and govern your use of our website. Any failure by us to
          exercise or enforce any right or provision of these Terms and
          Conditions shall not constitute a waiver of such right or provision.
        </p>
      </div>
    </div>
  );
};

export default Terms;
