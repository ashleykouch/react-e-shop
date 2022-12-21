import styles from "./HomePage.module.scss";
import CoffeeList from "../../Lists/CoffeeList/CoffeeList";
import Home_Image from "../../../assets/main-img.gif";

const HomePage = () => {
  // call the get data function when page mounts

  // useEffect wuth an empty watch list
  return (
    <div className={styles.Home}>
      <div className={styles.Home_Img}>
        <img src={Home_Image} alt="img-background" />
      </div>
      <CoffeeList />
    </div>
  );
};

export default HomePage;
