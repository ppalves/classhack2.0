import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Login from "./components/login.js"
import Feed from './components/feed.js'

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/feed" component={Feed}/>

      </Switch>
    </Router>
  );
}

export default App;
