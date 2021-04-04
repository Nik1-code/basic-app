import React, { Component } from "react";
import { Link } from "react-router-dom";

const Login = ({
  email,
  password,
  login,
  onChangeLoginEmail,
  onChangeLoginPassword,
}) => {
  return (
    <div>
      <div>
        <Link to="/">X</Link>
        <Link
          to="/Registration"
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: 10,
            textAlign: "center",
            textDecoration: "none",
            display: "inline - block",
          }}
        >
          SIGN UP
        </Link>
      </div>
      <div>
        <h2>Log in</h2>
        <input
          type="email"
          placeholder="Email"
          onChange={onChangeLoginEmail}
          value={email}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={onChangeLoginPassword}
          value={password}
        />
        <br />
        <Link to="/ForgotPassword">Forgot Password</Link>
        <br />
        <button onClick={login}>LOG IN</button>
        <p>
          By signing in to GuitarSrc, you agree to our Terms and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Login;
