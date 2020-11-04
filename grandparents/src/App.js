
import './App.css';
import Home from './Components/Home/home';
import Login from './Components/Login/login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
    <Router path="/" exact>
    <Home></Home>
    
    </Router>
    
  );
}

export default App;
