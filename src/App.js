import logo from './logo.svg';
import './App.css';
import Navigationbar from './menu/Navigationbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Services from './pages/services/Services';
import About2 from './pages/About2';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Navigationbar />
        <Route exact path='/' component={Home} />
      </Router>

    </div>
  );
}

export default App;
