import logo from "./logo.svg";
import "./App.css";
import Navigationbar from "./menu/Navigationbar";
import Services from "./pages/services/Services";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Competences from "./pages/competences/Competences";
import React from "react";
import Home from "./pages/Home/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigationbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/competences" component={Competences} />
          <Route path="/contact" component={Services} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
