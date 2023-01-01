import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import CartPage from "./containers/Pages/CartPage/CartPage";
import CoffeePage from "./containers/Pages/CoffeePage/CoffeePage";
import HomePage from "./containers/Pages/HomePage/HomePage";
import TeaPage from "./containers/Pages/TeaPage/TeaPage";
import CoffeeList from "./containers/Lists/CoffeeList/CoffeeList";
import { useState } from "react";
import { useEffect } from "react";
import { getCoffeeData } from "./services/CoffeeData";
import { getTeaData } from "./services/TeaData";
import CoffeeProductPage from "./components/ProductPage/CoffeeProductPage/CoffeeProductPage";
import TeaProductPage from "./components/ProductPage/TeaProductPage/TeaProductPage";
import Footer from "./containers/Footer/Footer";
import CheckoutPage from "./containers/Pages/CheckoutPage/CheckoutPage";
import OrderPage from "./containers/Pages/OrderPage/OrderPage";
import Terms from "./containers/Pages/CustomerCarePages/Terms/Terms";
import Shipping from "./containers/Pages/CustomerCarePages/Shipping/Shipping";
import Refund from "./containers/Pages/CustomerCarePages/Refund/Refund";

const App = () => {
  // coffee
  // call the get data function when page mounts

  const [coffee, setCoffee] = useState([]);

  // useEffect wuth an empty watch list
  useEffect(() => {
    const coffeeWrapper = async () => {
      const coffeeData = await getCoffeeData();
      setCoffee(coffeeData);
    };
    coffeeWrapper();
  }, []);

  // tea
  // call the get data function when page mounts

  const [tea, setTea] = useState([]);

  // useEffect with an empty watch list
  useEffect(() => {
    const teaWrapper = async () => {
      const teaData = await getTeaData();
      setTea(teaData);
    };
    teaWrapper();
  }, []);

  const [cart, setCart] = useState(null);
  const addToCart = (data) => {
    if (cart && cart.filter((item) => item.id === data.id).length > 0) {
      return "exists";
    }

    data.qty = 1;
    console.log(data, "addtocart");
    if (cart != null) {
      setCart([...cart, data]);
    } else {
      setCart([data]);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage coffee={coffee} tea={tea} addToCart={addToCart} />
            }
          ></Route>
          <Route
            path="/coffee"
            element={<CoffeePage coffee={coffee} addToCart={addToCart} />}
          ></Route>
          <Route
            path="/coffee/:id"
            element={<CoffeeProductPage coffee={coffee} />}
          />
          <Route
            path="/tea"
            element={<TeaPage tea={tea} addToCart={addToCart} />}
          ></Route>
          <Route
            path="/tea/:id"
            element={<TeaProductPage tea={tea} addToCart={addToCart} />}
          />
          <Route path="/cart" element={<CartPage cart={cart} />}></Route>
          <Route path="/checkout" element={<CheckoutPage />}></Route>
          <Route path="/order" element={<OrderPage />}></Route>
          <Route path="/terms-and-conditions" element={<Terms />}></Route>
          <Route path="/shipping-and-returns" element={<Shipping />}></Route>
          <Route path="/refund-policy" element={<Refund />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
