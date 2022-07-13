import React, { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submitForm = () => {
    if (!username || !email || !password) {
      return setError("Please fill all the fields");
    }

    axios
      .post("http://localhost:4000/api/user", {
        username: username,
        email: email,
        password: password,
      })
      .then((res) => {
        navigate('/login');
      })
      .catch((e) => {
        setError(e.response.data);
      });
  };

  return (
    <>
      <nav className="loginNav">
        <div className="brand-logo">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#151449",
            }}
          >
            <b>Startupeer</b>
          </Link>
        </div>
      </nav>
      <div className="container-login">
        <div className="loginCont">
          <div className="login-form">
            {error && (
              <div className="field">
                <div className="errorDiv">{error}</div>
              </div>
            )}
            <div className="field">
              <p className="filedp">Create an account.</p>
              <p className="label-login">
                Already have an account? <Link to="/login">Login</Link>.
              </p>
            </div>
            <div className="field">
              <p className="label">Username</p>
              <input
                className="inp"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>
            <div className="field">
              <p className="label">Email</p>
              <input
                className="inp"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="field">
              <p className="label">Password</p>
              <input
                className="inp"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="outing-label">
              We'll never try to share your passwords.
            </div>
            <div className="login-button" onClick={submitForm}>
              Create account
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
