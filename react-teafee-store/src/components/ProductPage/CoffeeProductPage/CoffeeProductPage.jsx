import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoffeeProductPage = ({ coffee }) => {
  const { id } = useParams();

  const [coffeeProduct, setCoffeeProduct] = useState({});

  useEffect(() => {
    const coffeeData = coffee && coffee.find((coffees) => coffees.id === id);
    console.log(coffee, "define");
    console.log(coffeeData, "data");
    setCoffeeProduct(coffeeData);
  }, [id, coffee]);

  return coffeeProduct ? (
    <div>
      <h1>{coffeeProduct.productName}</h1>
      <h2>productBrand</h2>
      <h3>productPrice</h3>
    </div>
  ) : (
    <div>Product does not exist</div>
  );
};

export default CoffeeProductPage;
