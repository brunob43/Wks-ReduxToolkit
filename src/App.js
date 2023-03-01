import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/form" component={Form} />
    </div>
  );
}

export default App;

// COMPONENTE HOME
// CARDS
// CARD
// FORM
// NAVBAR

// REDUX
// ACTIONS
// REDUCER
// STORE

// CONECTAR REACT CON REDUX => PROVIDER
// DARLE A LA APP LA CAPACIDAD DE DEFINIR RUTAR => BROWSER ROUTER
