import React from "react";
import "./register.css";

export const Register = () => {
  return (
    <>
      <nav className="loginNav">
        <div className="brand-logo">
          <b>Startupeer</b>
        </div>
      </nav>
      <div className="container-login">
        <div className="loginCont">
          <div className="login-form">
            <div className="field">
              <p className="filedp">Create an account.</p>
              <p className="label-login">Already have an account? Login.</p>
            </div>
            <div className="field">
              <p className="label">Username</p>
              <input className="inp" />
            </div>
            <div className="field">
              <p className="label">Email</p>
              <input className="inp" />
            </div>
            <div className="field">
              <p className="label">Password</p>
              <input className="inp" type="password" />
            </div>
            <div className="outing-label">We'll never try to share your passwords.</div>
            <div className="login-button">Create account</div>
          </div>
        </div>
      </div>
    </>
  )
}