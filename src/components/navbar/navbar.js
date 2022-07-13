import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <b>Startupeer</b>
        </div>
        <div className="left">
          <div className="login">
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "#E5D9F2",
              }}
            >
              Login
            </Link>
          </div>
          <div className="login">
            <Link
              to="/register"
              style={{
                textDecoration: "none",
                color: "#E5D9F2",
              }}
            >
              Register
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
