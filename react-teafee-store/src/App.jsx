import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import CartPage from "./containers/Pages/CartPage/CartPage";
import CoffeePage from "./containers/Pages/CoffeePage/CoffeePage";
import HomePage from "./containers/Pages/HomePage/HomePage";
import TeaPage from "./containers/Pages/TeaPage/TeaPage";

const App = () => {
  return (
    <div className="App">
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
