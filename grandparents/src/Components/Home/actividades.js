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
  <div>
  <nav className="o-nav-home">
  <div className="o-nav-left">
   <img className="o-img-home"
     src={imglogo}
     width="35"
     height="35"
     className="d-inline-block align-top"
     alt="React Bootstrap logo"
      />
    <p>GrandParents Enjoy</p>
  </div>  
   <div className="o-nav-right">
    <ul className="o-ul-home">
      <Link to="/" className="o-li-home">Inicio</Link>
      <Link to="/actividades" className="o-li-home">Actividades</Link>
      <Link className="o-li-home">Testimonios</Link>
      <Link className="o-li-home">Conócenos</Link>
    </ul>
   </div>
</nav>
</div>

<div> aqui debe ir el contenido para actividades</div>
  </Route>
  </Switch>
        </Router>

    );
}
export default Actividades;