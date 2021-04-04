import React, { Component } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = ({ email, onChangeEmail, emailForgotPassword }) => {
  return (
    <div>
      <Link to="/Login">
        <button>LOGIN</button>
      </Link>
      <h2>Forgot password</h2>
      <p>Enter your Email to reset your password.</p>
      <input
        type="email"
        placeholder="Email"
        onChange={onChangeEmail}
        value={email}
      />
      <button onClick={emailForgotPassword}>SUBMIT</button>
    </div>
  );
};

export default ForgotPassword;
