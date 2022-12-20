import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar/NavBar";
import CartPage from "./containers/CartPage/CartPage";
import CoffeePage from "./containers/CoffeePage/CoffeePage";
import HomePage from "./containers/HomePage/HomePage";
import Main from "./containers/Main/Main";
import TeaPage from "./containers/TeaPage/TeaPage";

const App = () => {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/coffee" element={<CoffeePage />}></Route>
          <Route path="/tea" element={<TeaPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
