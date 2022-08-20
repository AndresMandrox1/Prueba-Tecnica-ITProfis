// import logo from './logo.svg';
import { Route, Switch } from "react-router-dom";
import React from "react";
import LandingPage from "./components/LandingPage";
import Camiones from "./components/Camiones.jsx";
import { Users } from "./components/Users";
import {Viaje} from "./components/Viaje"

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/">
          <Route path="/camion" component={Camiones} />
          <Route path="/cliente" component={Users} />
          <Route path="/home" component={Viaje} />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
