import React from "react";
import { Button } from "../button/button";
import "./card.css";

export const BriefProfile = ({ username, avaText }) => {
  return (
    <>
      <div className="loginCard">
        <div className="briefavatar">
          {avaText}
        </div>
        <div className="name">
          <p>{username}</p>
        </div>
        <div className="button">
          <p style={{
            fontFamily: 'inter',
            fontSize: 14
          }}>Add another startup idea</p>
        </div>
        <div className="button">
          <p style={{
            fontFamily: 'inter',
            fontSize: 14
          }}>Go to your profile</p>
        </div>
      </div>
    </>
  );
};
