import React, { Component } from "react";
import testUtils from "react-dom/test-utils";
import { Link } from "react-router-dom";

const Registration = ({
  age,
  name,
  email,
  emailError,
  password,
  passwordError,
  nameError,
  ageError,
  onChangeAge,
  onChangeEmail,
  onChangeName,
  onChangePassword,
  register,
}) => {
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
        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={onChangeAge}
          value={age}
        />
        <h4>{ageError}</h4>
        <br />
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={onChangeName}
          value={name}
        />
        <h4>{nameError}</h4>

        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={onChangeEmail}
          value={email}
        />
        <h4>{emailError}</h4>
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={onChangePassword}
          value={password}
        />
        <h4>{passwordError}</h4>
        <br />
        <button onClick={register}>CREATE ACCOUNT</button>
        <p>
          By signing in to GuitarSrc, you agree to our Terms and Privacy Policy.
        </p>
      </div>
    </div>
  );
};
// }

export default Registration;
