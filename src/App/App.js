import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import logo from '../logo.svg';
import './App.css';
import {HomePage} from '../HomePage'
import {Header} from '../Header'
import {Visitor} from '../Visitor'
import {AllPage} from '../AllPage'
import {NewPage} from '../NewPage'

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/visitor" component={Visitor}/>
        <Route path="/all" component={AllPage} />
        <Route path="/new" component={NewPage} />
        <Route path="/" component={HomePage} />
      </Switch>    
    </div>
  );
}

export default App;
