import React from 'react';
import "./home.css"
function Home(){
    return(
        <div className="o-container-home">
            <nav className="o-nav-home">
              <img className="o-img-home"
                src="../.././logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
                <ul className="o-ul-home">
                    <li className="o-li-home">Inicio</li>
                    <li className="o-li-home">Actividades</li>
                    <li className="o-li-home">Testimonios</li>
                    <li className="o-li-home">Conócenos</li>

                </ul>
          </nav>
        </div>
    );
}
export default Home;