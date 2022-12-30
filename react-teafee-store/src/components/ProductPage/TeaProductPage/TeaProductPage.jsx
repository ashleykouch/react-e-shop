import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TeaProductPage = ({ tea }) => {
  const { id } = useParams();

  const [teaProduct, setTeaProduct] = useState({});

  useEffect(() => {
    const teaData = tea && tea.find((teas) => teas.id === id);
    setTeaProduct(teaData);
  }, [id, tea]);

  return teaProduct ? (
    <div>
      <h1>{teaProduct.productName}</h1>
      <h2>productBrand</h2>
      <h3>productPrice</h3>
    </div>
  ) : (
    <div>Product does not exist</div>
  );
};

export default TeaProductPage;
