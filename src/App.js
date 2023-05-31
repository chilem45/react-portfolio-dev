import logo from './logo.svg';
import './App.css';
import Navigationbar from './menu/Navigationbar';
import Services from './pages/services/Services';
import About2 from './pages/About2';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">

      <Navigationbar />
      <Home />
      <Services />

    </div>
  );
}

export default App;
