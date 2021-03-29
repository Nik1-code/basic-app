import React, { Component } from "react";
import "./App.css";
import Home from "./component/Home";
import Registration from "./component/Registration";
import Login from "./component/Login";
import Forgot_Password from "./component/Forgot_Password";
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
