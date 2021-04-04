import React, { Component } from "react";
import { Link } from "react-router-dom";

const ResetPassword = ({
  password,
  onChangePassword,
  resetPassword,
  onChangeResetNewPassword,
  handleResetPassword,
}) => {
  return (
    <div>
      <Link to="/Login">
        <button>LOGIN</button>
      </Link>
      <h2>Reset your new Password.</h2>
      <p>Enter your new password.</p>
      <label>New password : </label>
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={onChangePassword}
      />
      <br />
      <label>confirm password : </label>
      <input
        type="password"
        placeholder="Re-type password"
        value={resetPassword}
        onChange={onChangeResetNewPassword}
      />
      <button onClick={handleResetPassword}>SUBMIT</button>
    </div>
  );
};

export default ResetPassword;
