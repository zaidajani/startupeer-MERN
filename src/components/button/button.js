import React from "react";
import "./button.css";
import { Link } from "react-router-dom";

export const Button = () => {
  return (
    <>
      <div
        style={{
          marginTop: 50,
        }}
      >
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            color: "#151449",
          }}
        >
          <div className="button">Login</div>
        </Link>
        <Link
          to="/register"
          style={{
            textDecoration: "none",
            color: "#151449",
          }}
        >
          <div className="button">Register</div>
        </Link>
      </div>
    </>
  );
};
