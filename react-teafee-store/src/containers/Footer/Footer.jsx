import { Link, NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.Footer}>
        <div className={styles.Footer_Items}>
          <h2 className={styles.Footer_Items_Header}>Contact Info.</h2>
          <p className={styles.Footer_Items_Content}>Github</p>
          <p className={styles.Footer_Items_Content}>LinkedIn</p>
          <p className={styles.Footer_Items_Content}>Email</p>
        </div>

        <div className={styles.Footer_Items}>
          <h2 className={styles.Footer_Items_Header}>Links</h2>
          <NavLink to="/" className={styles.Footer_Items_Content}>
            Link 1
          </NavLink>
          <NavLink to="/" className={styles.Footer_Items_Content}>
            Link 2
          </NavLink>
          <NavLink to="/" className={styles.Footer_Items_Content}>
            Link 3
          </NavLink>
        </div>
        <div className={styles.Footer_Items}>
          <h2 className={styles.Footer_Items_Header}>
            Subscribe to our Newsletter
          </h2>
          <p className={styles.Footer_Items_Content}>
            Subscribe to receive updates, access to exclusive deals, and more
          </p>
          <input type="text" placeholder="Enter your email address" />
          <Link to="/">
            <button>Subscribe</button>
          </Link>
        </div>
      </div>
      <div className={styles.Footer_Items_Tag}>
        &copy; {new Date().getFullYear()} TEAFEE
      </div>
    </>
  );
};

export default Footer;
