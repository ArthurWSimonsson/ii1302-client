import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import logo from '../logo.svg';
import './App.css';
import {HomePage} from '../HomePage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>           */}
          <Switch>
            <Route exactpath="/" component={HomePage} />
          </Switch>
        {/* </p> */}
      </header>
    </div>
  );
}

export default App;
