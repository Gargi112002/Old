import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signin from "./components/Signin";






const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/About">
        <About />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/login" >
        <Login />
        </Route>
        <Route path="/signin" >
        <Signin />
        </Route>
    </Switch>
  );
};

export default App;
