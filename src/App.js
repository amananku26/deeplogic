import logo from "./logo.svg";
import "./App.css";
import { useContext } from "react";
import Home from "./components/Home";
import { Link, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart";
import MainFile from "./components/MainFile";
function App() {
  return (
    <>
      <div className="App">
        {/* {login ? (
          <Home />
        ) : (
          <button
            style={{
              height: "30px",
              background: "skyblue",
              color: "white",
              border: "none",
              width: "150px",
              borderRadius: "5px",
              margin: "10px",
            }}
            onClick={() => setLogin(true)}
          >
            Login
          </button>
        )}
      </div>
      <Switch>
        <Route path="/cart" exact>
          <Cart />
        </Route>
      </Switch> */}
        <MainFile />
      </div>
    </>
  );
}

export default App;
