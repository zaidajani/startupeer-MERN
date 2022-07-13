import React from "react";
import "./nav.css";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const AuthNavBar = ({ username }) => {
  const navigate = useNavigate();

  return (
    <>
      <nav>
        <div className="logo">
          <b>Startupeer</b>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <div className="left">
            <div className="login">{username}</div>
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
            onClick={() => {
              localStorage.removeItem('token');
              window.location.href = "/login";
            }}
          >
            Logout
          </div>
        </div>
      </nav>
    </>
  );
};
