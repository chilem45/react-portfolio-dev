import logo from './logo.svg';
import './App.css';
import Navigationbar from './menu/Navigationbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './pages/About';
function App() {
  return (
    <div className="App" style={{backgroundColor: 'blue'}}>
      <Router>
            <Navigationbar />
            <Switch>
                <Route exact path='/' component={About}/>
                <Route path='/about' component={About}/>
                <Route path='/about' component={About}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
