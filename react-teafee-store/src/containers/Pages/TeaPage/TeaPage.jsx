import TeaList from "../../Lists/TeaList/TeaList";
import styles from "./TeaPage.module.scss";
import TeaTypes from "../../../assets/types-of-tea.png";

const TeaPage = ({ tea, addToCart }) => {
  return (
    <div className={styles.Page_Container}>
      <div className={styles.Page_Header}>
        <h1 className={styles.Page_Header_Title}>Tea</h1>
      </div>
      <div className={styles.Page_Image}>
        <img src={TeaTypes} alt="tea-types" />
      </div>
      <TeaList tea={tea} addToCart={addToCart} />
    </div>
  );
};

export default TeaPage;
