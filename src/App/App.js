import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import logo from '../logo.svg';
import './App.css';
import {HomePage} from '../HomePage'
import {Header} from '../Header'
import {Visitor} from '../Visitor'
import {EditPage} from '../EditPage'
import {PrivateRoute } from '../Components';

/* Author Arthur Simonsson */

/* Main structure of the application. A header which is constantly shown and different paths depending on the url. */


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>        
        <Route path={["/", "/nologin"]}  exact component={HomePage} />
        <Route path={["/visitor", "/visitor/nologin"]} component={Visitor}/>
        <PrivateRoute path="/edit" component={EditPage}/>
      </Switch>  
    </div>
  );
}

export default App;
