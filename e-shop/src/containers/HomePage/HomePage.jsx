import styles from "./HomePage.module.scss";
import Home_Image from "../../assets/main-img.gif";

const HomePage = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.Home_Img}>
        <img src={Home_Image} alt="img-background" />
      </div>
    </div>
  );
};

export default HomePage;
