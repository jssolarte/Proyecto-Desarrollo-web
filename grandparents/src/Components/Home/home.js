import React from 'react';
import Actividades from '../Home/actividades'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import imglogo from '../../../src/logo.svg';
import imgHome from '../../img/home.png';
import bgelement from '../../img/bgelement.png'
import "./home.css"




function Home(){
    return(
      
      <Router>
    
        <Switch>
          <Route path="/home">
            <div className="o-container-home">  
              <div>
        </div>
      
           
            <div className="o-container-body-home">
              <div className="o-container-left">
                
                <div className="o-detail-left">
                 <h1>Actividades <br></br> lúdicas</h1>
                  <p className="o-paragraph">
                    Nuestra meta es ayudar <br></br>  a las personas mayores,<br></br>ofreciéndoles distintas <br></br> actividades para  <br></br> su tiempo en casa.
                   </p>

                   <div><Link><button className="o-btn-login">Iniciar Sesión</button></Link> </div>

                   <Link to="/login" className="o-btn-login" href="login.js">Inicio sesion</Link>
                </div> 
               
               </div>
               
                 <div className="o-container-right">
                   <img className="o-img-right" src={imgHome}></img>
                 </div>
              </div> 

              <div className="o-footer-home">
                  <div>
                    <h3 className="o-text-footer-l" >GrandParents</h3>
                    <p className="o-text-footer-l"> ©Grandparents Enjoy 2020. Derechos reservados</p>
                  </div>
                  <div> 
                    <ul> <p className="o-text-footer-l">Compañia</p>
                      <li className="o-text-footer-l">Conócenos</li>
                      <li className="o-text-footer-l">Testimonios</li>
                      <li className="o-text-footer-l">Equipo de trabajo</li>
                      <li className="o-text-footer-l">Descargas</li>

                    </ul>
                  </div>
                  <div>
                   <ul><p className="o-text-footer-l">Ayuda</p>
                      <li className="o-text-footer-l">Personas a cargo</li>
                      <li className="o-text-footer-l">Llamanos</li>
                      <li className="o-text-footer-l">Instrucciones</li>
                      <li className="o-text-footer-l">Como funciona</li>
                   </ul>
                  </div>

              </div>
         </div>
         </Route>
        </Switch>
        </Router> 
       
       
           );
          }
          export default Home;