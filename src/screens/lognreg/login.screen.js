import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = () => {
    if (!email || !password) {
      return setError('Please fill in all the fields');
    }

    axios.post("http://localhost:4000/api/auth", {
      email: email,
      password: password,
    })
    .then(res => {
      localStorage.setItem('token', res.data);
      window.location.href = "/";
    }).catch(err => {
      setError(err.response.data);
    })
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
              <p className="filedp">Login</p>
              <p className="label-login">Welcome back 👋.</p>
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
              Dont have an account? <Link to="/register">create account</Link>.
            </div>
            <div className="login-button" onClick={login}>Login</div>
          </div>
        </div>
      </div>
    </>
  );
};
