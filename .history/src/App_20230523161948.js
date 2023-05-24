import logo from './logo.svg';
import './App.css';
import Navigationbar from './menu/Navigationbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
            <Navigationbar />
            <Switch>
                <Route exact path='/' component={""}/>
                <Route path='/about' component={"About"}/>
                <Route path='/about' component={"Contact"}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
