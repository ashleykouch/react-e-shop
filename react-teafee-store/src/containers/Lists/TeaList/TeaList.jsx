import TeaCard from "../../../components/Cards/TeaCard/TeaCard";
import styles from "./TeaList.module.scss";

const TeaList = ({ tea }) => {
  return (
    <div>
      <h2>TeaList</h2>
      <div className={styles.List}>
        <div className={styles.List_Card}>
          {tea &&
            tea.map((teas) => {
              return <TeaCard key={teas.id} teas={teas} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default TeaList;
