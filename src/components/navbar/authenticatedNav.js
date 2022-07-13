import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

export const AuthNavBar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <b>Startupeer</b>
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row"
        }}>
          <div className="left">
            <div className="login">zaidajani</div>
          </div>
          <div
            className="button"
            style={{
              width: 150,
              fontFamily: "Jaldi",
              fontSize: 16,
              marginLeft: -30,
              color: "#151449",
            }}
          >
            Logout
          </div>
        </div>
      </nav>
    </>
  );
};
