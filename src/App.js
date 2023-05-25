import logo from './logo.svg';
import './App.css';
import Navigationbar from './menu/Navigationbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About1 from './pages/About1';
import About2 from './pages/About2';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Navigationbar />
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/about1' component={About1} />
          <Route path='/about2' component={About2} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
