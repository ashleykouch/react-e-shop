import styles from "./CoffeeCard.module.scss";

const CoffeeCard = ({ coffees }) => {
  return (
    <div className={styles.Card}>
      <h2>{coffees.productName}</h2>
      <h3>{coffees.productBrand}</h3>
      <p>${coffees.productPrice}</p>
    </div>
  );
};

export default CoffeeCard;
