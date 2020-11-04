
import './App.css';
import Home from './Components/Home/home';
import Login from './Components/Login/login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Actividades from './Components/Home/actividades';

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
      <Switch>
         <Route path="/home">
           <Home></Home>
         </Route>
         <Route path="/login">
          <Login></Login>
         </Route>
         <Route path="/actividades">
          <Actividades></Actividades>
         </Route>
      </Switch>
    </Router>
    
    
   
    
  );
}

export default App;
