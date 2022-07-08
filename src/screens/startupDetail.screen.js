import React from "react";
import { NavBar } from "../components/navbar/navbar";
import "./loggedout.css";
import { Avatar } from "../components/avatar/avatar";
import { Button } from "../components/button/button";

export const StartupDetail = () => {
  return (
    <>
      <NavBar />
      <div className="container mt4">
        <div className="avatarFlex">
          <Avatar />
          <div className="infoFlex">
            <p className="urlLabel">/spacer-spaces</p>
            <p className="info">Posted 8th july 2022 · Zaid Ajani · 500 reviews · 21 suggestions</p>
          </div>
        </div>
        <div className="title mt4">
          <p>
            <b>Spacer Spaces</b> - A home selling platform aggregator creating ease of
            use for people seeking for homes.
          </p>
        </div>
        <div className="description mt4">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="buttonDiff">
          <p>Post your opinions</p>
        </div>
      </div>
    </>
  );
};
