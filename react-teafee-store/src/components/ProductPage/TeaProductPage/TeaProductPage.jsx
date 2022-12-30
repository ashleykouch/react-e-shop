import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./TeaProductPage.module.scss";

const TeaProductPage = ({ tea }) => {
  const { id } = useParams();

  const [teaProduct, setTeaProduct] = useState({});

  useEffect(() => {
    const teaData = tea && tea.find((teas) => teas.id === id);
    setTeaProduct(teaData);
  }, [id, tea]);

  // handle quantity

  const [qty, setQty] = useState(1);

  const handleIncrement = () => {
    setQty(qty + 1);
  };

  const handleDecrement = () => {
    setQty(qty - 1);
  };

  return teaProduct ? (
    <div className={styles.Product_Page}>
      <div className={styles.Product_Image}>
        <img src={teaProduct.productImg} alt="product-img" />
      </div>
      <div className={styles.Product_Types}>
        <h1 className={styles.Product_Items}>{teaProduct.productName}</h1>
        <h2 className={styles.Product_Items}>{teaProduct.productBrand}</h2>
        <h2 className={styles.Product_Items}>{teaProduct.productPrice}</h2>
        <div className={styles.Product_Qty}>
          <h3>Quantity:</h3>
          <div className={styles.Product_Counter}>
            <button
              className={styles.Product_Counter_Btn}
              onClick={handleDecrement}
            >
              -
            </button>
            <div>{qty}</div>
            <button
              className={styles.Product_Counter_Btn}
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
        </div>
        <button className={styles.Product_AddToCartBtn}>Add to Cart</button>
        <h3 className={styles.Product_Items}>Description</h3>
        <p className={styles.Product_Items}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          suscipit illum repudiandae assumenda mollitia fugit eum ducimus ipsa
          minima repellendus? Quod harum quaerat non quisquam, similique quam
          labore tempore eos.
        </p>
        <h3 className={styles.Product_Items}>Ingredients</h3>
        <p className={styles.Product_Items}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          suscipit illum repudiandae assumenda mollitia fugit eum ducimus ipsa
          minima repellendus? Quod harum quaerat non quisquam, similique quam
          labore tempore eos.
        </p>
      </div>
    </div>
  ) : (
    <div>Product does not exist</div>
  );
};

export default TeaProductPage;
