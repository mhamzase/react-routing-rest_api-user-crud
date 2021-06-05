import "./App.css";
// import { Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import User from "./components/User"

import Navbaar from "./components/layouts/Navbaar";
import NotFound from './components/NotFound'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* it will be show on every components */}
        <Navbaar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/add-user" component={AddUser} />
          <Route exact path="/edit-user/:id" component={EditUser} />
          <Route exact path="/user/:id" component={User} />
          <Route component={NotFound} />
        </Switch>

        
      </div>
    </Router>
  );
}

export default App;
