import { BrowserRouter } from "react-router-dom";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar/NavBar";
import Main from "./containers/Main/Main";

const App = () => {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
      <Main />
    </div>
  );
};

export default App;
