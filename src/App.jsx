import logo from './logo.svg';
import './App.css';
import Navigationbar from './menu/Navigationbar';
import Services from './pages/services/Services';
import Competences from './pages/competences/Competences';
import Home from './pages/home/Home';
import React from 'react';
function App() {
  return (
    <div className="App">

      <Navigationbar />
      <Home />
      <Competences />
      <Services/>
    </div>
  );
}

export default App;
