import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import {HomePage} from '../HomePage'
import {Header} from '../Header'
import {Visitor} from '../Visitor'

import {AllPage} from '../AllPage'
import {EditPage} from '../EditPage'
import {PrivateRoute } from '../Components';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>        
        <Route path="/" exact component={HomePage} />
        <Route path="/visitor" component={Visitor}/>
        <Route path="/all" component={AllPage} />
        <PrivateRoute path="/edit" component={EditPage}/>
      </Switch>  
    </div>
  );
}

export default App;
