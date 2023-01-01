import { Link, NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";
import email from "../../assets/email-logo.png";
import github from "../../assets/github-logo.png";
import linkedIn from "../../assets/linkedin-logo.png";

const Footer = () => {
  return (
    <>
      <div className={styles.Footer}>
        <div className={styles.Footer_Items}>
          <h2 className={styles.Footer_Items_Header}>Contact Info.</h2>
          <div className={styles.Footer_Items_Img}>
            <img src={github} alt="github" />
            <p className={styles.Footer_Items_Content}>Github</p>
          </div>
          <div className={styles.Footer_Items_Img}>
            <img src={linkedIn} alt="linkedin" />
            <p className={styles.Footer_Items_Content}>LinkedIn</p>
          </div>
          <div className={styles.Footer_Items_Img}>
            <img src={email} alt="email" />
            <p className={styles.Footer_Items_Content}>Email</p>
          </div>
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
          <input
            className={styles.Footer_Items_Input}
            type="text"
            placeholder="Enter your email address"
          />
          <Link to="/" className={styles.Footer_Items_Btn}>
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
