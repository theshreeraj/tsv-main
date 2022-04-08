import React from 'react';
import './App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Home';
import { Header } from './containers';
import Portfolioprofile from './pages/profiles/portfolio/Portfolioprofile';

// import { Footer, Features, Header, Categories } from './containers';
// import { Navbar } from './components';
// import Portfolioprofile from './pages/profiles/portfolio/Portfolioprofile';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/wedding">
            <h1>wedding</h1>
          </Route>
          <Route path="/register">
            <h1>Register</h1>
          </Route>
          <Route path="/portrait">
            <Header />
            <Portfolioprofile />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
