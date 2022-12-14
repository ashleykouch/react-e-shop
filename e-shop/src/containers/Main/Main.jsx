import styles from "./Main.module.scss";
import Main_Image from "../../assets/main-img.gif";

const Main = () => {
  return (
    <div className={styles.Main}>
      <div className={styles.Main_Img}>
        <img src={Main_Image} alt="img-background" />
      </div>
    </div>
  );
};

export default Main;
