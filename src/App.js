import React, { Component } from "react";
import "./App.css";
import Home from "./component/Home";
import Registration from "./component/Registration";
import Login from "./component/Login";
import ForgotPassword from "./component/ForgotPassword";
import { BrowserRouter, Route } from "react-router-dom";
import ResetPassword from "./component/ResetPassword";

class App extends Component {
  constructor() {
    super();
    this.state = {
      age: "",
      ageError: "",
      name: "",
      nameError: "",
      email: "",
      emailError: "",
      password: "",
      passwordError: "",
      resetPassword: "",
    };

    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeResetPassword = this.onChangeResetPassword.bind(this);
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.forgotPassword = this.forgotPassword.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
  }
  // ------------Registration Page ----------------------
  onChangeAge(e) {
    this.setState({ age: e.target.value });
  }
  onChangeName(e) {
    this.setState({ name: e.target.value });
  }
  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }
  onChangeResetPassword(e) {
    this.setState({ resetPassword: e.target.value });
  }
  //ageValidation
  isValidAge(age) {
    if (age === "") {
      this.setState({ ageError: "Age cannot be empty!" });
      return false;
    } else {
      return true;
    }
  }
  //nameValidation
  isValidName(name) {
    if (name === "") {
      this.setState({ nameError: "Name cannot be empty!" });
      return false;
    } else {
      return true;
    }
  }
  //emailValidation
  isValidEmail(email) {
    if (email === "") {
      this.setState({ emailError: "Email cannot be empty!" });
      return false;
    } else {
      const emailRegEx = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/;
      const isValidEmail = emailRegEx.test(email);
      if (!isValidEmail) {
        this.setState({ emailError: "Please enter valid email." });
        return false;
      } else {
        return true;
      }
    }
  }
  //passwordValidation
  isValidPassword(password) {
    if (password === "") {
      this.setState({ passwordError: "Password cannot be empty!" });
      return false;
    } else {
      const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{6,12}$/;
      const isValidPassword = passwordRegEx.test(password);
      if (!isValidPassword) {
        this.setState({
          passwordError: "Password doesnt match with the default criteria.",
        });
        return false;
      } else {
        return true;
      }
    }
  }
  //post data
  // register() {
  //   const { age, name, email, password } = this.state;
  //   console.log(age, name, email, password);
  //   let data = { age, name, email, password };
  //   fetch("http://localhost:5000/Users", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   }).then((resp) => {
  //     resp.json().then((result) => {
  //       console.warn("result", result);
  //     });
  //   });
  // }

  //Resgister new user
  register() {
    const emailFlag = this.isValidEmail(this.state.email);
    const passwordFlag = this.isValidPassword(this.state.password);
    const nameFlag = this.isValidName(this.state.name);
    const ageFlag = this.isValidAge(this.state.age);
    if (emailFlag && passwordFlag && nameFlag && ageFlag) {
      var newId = {};
      newId["age"] = this.state.age;
      newId["name"] = this.state.name;
      newId["email"] = this.state.email;
      newId["password"] = this.state.password;
      console.log(newId);
      this.data.push(newId);
      console.log(this.data);
      alert("You have successfully created account.");
      this.setState({ email: "", age: "", name: "", password: "" });
    }
  }
  data = [];

  // ------------Login Page ----------------------
  login() {
    const { email, password } = this.state;
    const eamilId = this.data.find(function (data) {
      return data.email === email;
    });
    const passwordValue = this.data.find(function (data) {
      return data.password === password;
    });

    if (eamilId && passwordValue) {
      alert("successfully logged in.");
      this.setState({ email: "", password: "" });
      window.location.replace("/");
    } else {
      alert("Please enter valid email and password.");
      this.setState({ email: "", password: "" });
    }
  }

  // ------------Forgot Password Page ----------------------
  forgotPassword() {
    const { email } = this.state;
    const eamilId = this.data.find(function (data) {
      return data.email === email;
    });
    if (eamilId) {
      alert("Please check your email for New Password");
      this.setState({ email: "" });
      window.location.replace("/ResetPassword");
    } else {
      alert("Your email doesnt match with our data.");
      this.setState({ email: "" });
    }
  }

  // ------------Reset Password Page ----------------------
  resetPassword() {
    if (this.state.password === this.state.resetPassword) {
      alert("You have succesdfully set new password.");
      this.setState({ password: "", resetPassword: "" });
    } else {
      alert(
        "Please check if New password and Confirm password both have same values."
      );
    }
  }

  render() {
    console.log(this.data);
    return (
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/Login" component={Login}>
          <Login
            email={this.state.email}
            password={this.state.password}
            login={this.login}
            onChangeLoginEmail={this.onChangeEmail}
            onChangeLoginPassword={this.onChangePassword}
          />
        </Route>
        <Route path="/Registration" component={Registration}>
          <Registration
            age={this.state.age}
            name={this.state.name}
            email={this.state.email}
            password={this.state.password}
            emailError={this.state.emailError}
            passwordError={this.state.passwordError}
            ageError={this.state.ageError}
            nameError={this.state.nameError}
            onChangeAge={this.onChangeAge}
            onChangeEmail={this.onChangeEmail}
            onChangeName={this.onChangeName}
            onChangePassword={this.onChangePassword}
            register={this.register}
          />
        </Route>

        <Route path="/ForgotPassword" component={ForgotPassword}>
          <ForgotPassword
            email={this.state.email}
            onChangeEmail={this.onChangeEmail}
            emailForgotPassword={this.forgotPassword}
          />
        </Route>
        <Route path="/ResetPassword" component={ResetPassword}>
          <ResetPassword
            password={this.state.password}
            onChangePassword={this.onChangePassword}
            resetPassword={this.state.resetPassword}
            onChangeResetNewPassword={this.onChangeResetPassword}
            handleResetPassword={this.resetPassword}
          />
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;
