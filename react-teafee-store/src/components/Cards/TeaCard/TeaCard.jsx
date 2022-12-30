import styles from "./TeaCard.module.scss";

const TeaCard = ({ teas }) => {
  return (
    <div className={styles.Card}>
      <h2>{teas.productName}</h2>
      <h3>{teas.productBrand}</h3>
      <p>{teas.productPrice}</p>
      <button className={styles.AddToCartBtn}>Add to Cart</button>
    </div>
  );
};

export default TeaCard;
