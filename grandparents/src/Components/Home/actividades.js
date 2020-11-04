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
import imgFisica from '../../img/fisica.png';
import imgLudica from '../../img/ludicas.png';
import imgEstadistica from '../../img/estadistica.png'


function Actividades(){
    return(
        <Router>
       
  
  <Switch>
  <Route path="/actividades">
 
        <div>
            <div className="o-title-p-activity"> 
             <h1 className="o-title-h1">Nuestros servicios</h1>
                <p className="o-p-activity">Nuestra empresa se caracteriza por brindar bienestar emocional y lúdico a las personas mayores, así como un espacio en el que se pueden divertir y desconectar de la realidad.</p>       
            </div>

            <div className="o-cards-activity">
                <div className="o-detail-activity">
                <img className="o-img-activity" src={imgFisica}></img>
                <h2 className="o-h2-activity">Actividades fisicas</h2>
                <p className="o-p-detail-activity">Aquí puedes comenzar a hacer tus actividades físicas.</p>
                </div>

                <div className="o-detail-activity">
                <img className="o-img-activity" src={imgLudica}></img>
                <h2  className="o-h2-activity">Actividades Lúdicas</h2>
                <p className="o-p-detail-activity">Aquí puedes escoger diferentes juegos lúdicos.</p>
                </div>
                
                <div className="o-detail-activity">
                <img className="o-img-activity" src={imgEstadistica}></img>
                <h2  className="o-h2-activity">Estadísticas</h2>
                <p className="o-p-detail-activity">Aquí puedes consultar las estadísticas y resultados de tus entrenamientos.</p>
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
export default Actividades;