import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

export const Login = () => {
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
            <div className="field">
              <p className="filedp">Login</p>
              <p className="label-login">Welcome back 👋.</p>
            </div>
            <div className="field">
              <p className="label">Email</p>
              <input className="inp" />
            </div>
            <div className="field">
              <p className="label">Password</p>
              <input className="inp" type="password" />
            </div>
            <div className="outing-label">
              Dont have an account? <Link to="/register">create account</Link>.
            </div>
            <div className="login-button">Login</div>
          </div>
        </div>
      </div>
    </>
  );
};
