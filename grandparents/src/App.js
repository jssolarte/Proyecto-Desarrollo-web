
import './App.css';
import Home from './Components/Home/home';
import Login from './Components/Login/login';
import imglogo from './logo.svg';
import imgHome from './img/home.png';
import bgelement from './img/bgelement.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Actividades from './Components/Home/Actividades/actividades';
import ActividadFisica from './Components/Home/Actividades/actividadFisica';

// const Router = () => (
//   <BrowserRouter>
//      <Switch>
//        <Route exact path="/" component={Home} />
//        <Route path="/home" component={Home} />
//        <Route path="/login" component={Login} />
//     </Switch>
//   </BrowserRouter>
// )
// export default Router;

function App() {
  return (
    
    <Router>

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
        <Link to="/home" className="o-li-home">Inicio</Link>
        <Link to="/actividades" className="o-li-home">Actividades</Link>
        <Link className="o-li-home">Testimonios</Link>
        <Link className="o-li-home">Conócenos</Link>
      </ul>
     </div>
 </nav>
 
      <Switch>
      
      
      
      <Route exact path="/actividades">
       <Actividades></Actividades>
      </Route>
      <Route exact path="/actividadFisica">
      <ActividadFisica></ActividadFisica>
      </Route>
      <Route exact path="/login">
       <Login></Login>
      </Route>
      <Route exact path="/home" exact>
      <Home></Home>
      </Route>
      <Route path="/" component={Home}>
      <Home />
      </Route>
      </Switch>
    </Router>
    
    
   
    
  );
}

export default App;
