import React from 'react';
import imglogo from '../../../src/logo.svg';
import imgHome from '../../img/home.png';
import bgelement from '../../img/bgelement.png'
import "./home.css"
function Home(){
    return(
        <div className="o-container-home">  
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
                     <li className="o-li-home">Inicio</li>
                     <li className="o-li-home">Actividades</li>
                     <li className="o-li-home">Testimonios</li>
                     <li className="o-li-home">Conócenos</li>
                   </ul>
                  </div>
              </nav>
           </div>
            <div className="o-container-body-home">
              <div className="o-container-left">
                
                <div className="o-detail-left">
                 <h1>Actividades <br></br> lúdicas</h1>
                  <p>
                    Nuestra meta es ayudar a las personas mayores, ofreciéndoles distintas actividades para pasar su tiempo en casa.
                   </p>
                </div> 
                <div><button>Iniciar Sesión</button></div>
               </div>
               
                 <div className="o-container-right">
                   <img src={imgHome}></img>
                 </div>
              </div> 

              <div className="o-footer-home">
                  <div>
                    <h3>GrandParents</h3>
                    <p>grandparents enjoy 2020 derechos reservados</p>
                  </div>
                  <div> 
                    <ul> <p>Compañia</p>
                      <li>Conócenos</li>
                      <li>Testimonios</li>
                      <li>Equipo de trabajo</li>
                      <li>Descargas</li>

                    </ul>
                  </div>
                  <div>
                   <ul><p>Ayuda</p>
                      <li>Personas a cargo</li>
                      <li>Llamanos</li>
                      <li>Instrucciones</li>
                      <li>Como funciona</li>
                   </ul>
                  </div>

              </div>
         </div>
           );
          }
          export default Home;