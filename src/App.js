import React, { Component } from "react";
import "./App.css";
import Home from "./Home";
import Registration from "./Registration";
import Login from "./Login";
import Forgot_Password from "./Forgot_Password";
import { BrowserRouter, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/Login" component={Login} />
        <Route path="/Registration" component={Registration} />
        <Route path="/ForgotPassword" component={Forgot_Password} />
      </BrowserRouter>
    );
  }
}

export default App;
