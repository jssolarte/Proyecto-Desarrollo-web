import React from 'react';
import ReactPlayer from 'react-player/youtube';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function ActividadFisica(){
    return(
        <Router>
            <Switch>
                <Route path="/actividadFisica">
                <div>
                <ReactPlayer className="o-video" url='https://www.youtube.com/watch?v=SBN96KqyqrU&ab_channel=FisioterapiaQuer%C3%A9taro'
                >
                    <h1>Hola mundo</h1>
                </ReactPlayer>
                </div>
                </Route>
            </Switch>
        </Router>
    );
}
export default ActividadFisica;