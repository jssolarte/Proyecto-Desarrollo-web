import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import imglogo from '../../../src/logo.svg';
import imgHome from '../../img/home.png';
import bgelement from '../../img/bgelement.png'

function Actividades(){
    return(
        <Router>
       
  
  <Switch>
  <Route path="/actividades">
        <h1>Hola mundooo</h1>
  </Route>
  </Switch>
        </Router>

    );
}
export default Actividades;