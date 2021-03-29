import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">X</Link>
          <Link to="/Registration">
            <button>SIGN UP</button>
          </Link>
        </div>
        <div>
          <h2>Log in</h2>
          <input type="email" placeholder="Email or username" />
          <br />
          <input type="number" placeholder="Password" onClick="" />
          <br />
          <Link to="/ForgotPassword">Forgot Password</Link>
          <br />
          <button>LOG IN</button>
          <p>
            By signing in to GuitarSrc, you agree to our Terms and Privacy
            Policy.
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
