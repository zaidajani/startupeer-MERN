import React from "react";
import { Button } from "../button/button";
import "./card.css";
import { Link } from "react-router-dom";

export const BriefProfile = ({ username, avaText }) => {
  return (
    <>
      <div className="loginCard">
        <div className="briefavatar">{avaText}</div>
        <div className="name">
          <p>{username}</p>
        </div>
        <Link
          to="/add"
          style={{
            textDecoration: "none",
            color: "#000000",
          }}
        >
          <div className="button">
            <p
              style={{
                fontFamily: "inter",
                fontSize: 14,
              }}
            >
              Add another startup idea
            </p>
          </div>
        </Link>
        <Link
          to="/profile"
          style={{
            textDecoration: "none",
            color: "#000000",
          }}
        >
          <div className="button">
            <p
              style={{
                fontFamily: "inter",
                fontSize: 14,
              }}
            >
              Go to your profile
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};
