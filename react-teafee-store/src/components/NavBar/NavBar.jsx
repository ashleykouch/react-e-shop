import styles from "./NavBar.module.scss";
import TeaFee from "../../assets/teafee-logo.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const activeStyle = ({ isActive }) =>
    isActive ? `${styles.Nav_Link} ${styles.Nav_Link_Active}` : styles.Nav_Link;

  return (
    <nav className={styles.Main}>
      <img src={TeaFee} alt="logo" />
      <div className={styles.Nav}>
        <NavLink className={activeStyle} to="/">
          Home
        </NavLink>
        <NavLink className={activeStyle} to="/coffee">
          Coffee
        </NavLink>
        <NavLink className={activeStyle} to="/tea">
          Tea
        </NavLink>
        <NavLink className={activeStyle} to="/cart">
          Cart
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
