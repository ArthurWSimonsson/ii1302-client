import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import logo from '../logo.svg';
import './App.css';
import {HomePage} from '../HomePage'
import {Header} from '../Header'
import {Visitor} from '../Visitor'
import {EditPage} from '../EditPage'


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>        
        <Route path="/visitor" component={Visitor}/>
        <Route path="/edit" component={EditPage}/>
        <Route path="/" component={HomePage} />
      </Switch>  
    </div>
  );
}

export default App;
