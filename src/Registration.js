import React, { Component } from "react";
import { Link } from "react-router-dom";

class Registration extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <Link to="/">X</Link>
          <Link to="/Login">
            <button>LOGIN</button>
          </Link>
        </div>
        <div>
          <h2>Create your profile</h2>
          <input type="number" placeholder="Age" />
          <br />
          <input type="text" placeholder="Name(optional)" />
          <br />
          <input type="email" placeholder="Email" />
          <br />
          <input type="password" placeholder="Password" />
          <br />
          <button>CREATE ACCOUNT</button>
          <p>
            By signing in to GuitarSrc, you agree to our Terms and Privacy
            Policy.
          </p>
        </div>
      </div>
    );
  }
}

export default Registration;
