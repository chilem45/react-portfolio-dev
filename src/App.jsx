import logo from "./logo.svg";
import "./App.css";
import Navigationbar from "./menu/Navigationbar";
import Services from "./pages/services/Services";
import Competences from "./pages/competences/Competences";
import React from "react";
import Home from "./pages/Home/Home";
function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Home />
      {/* <Competences /> */}

      {/* <Services/> */}
    </div>
  );
}

export default App;
