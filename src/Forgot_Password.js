import React, { Component } from "react";
import { Link } from "react-router-dom";

class Forgot_Password extends Component {
  render() {
    return (
      <div>
        <Link to="/Login">
          <button>LOGIN</button>
        </Link>
        <h2>Forgot password</h2>
        <p>Enter your Email to reset your password.</p>
        <input type="email" placeholder="Email" />
        <button>SUBMIT</button>
      </div>
    );
  }
}

export default Forgot_Password;
