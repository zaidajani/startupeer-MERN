import React from "react";
import { Button } from "../button/button";
import "./card.css";

export const LoginCard = () => {
  return (
    <>
      <div className="loginCard">
        <div className="cardText">
          Wanna take <b>public review</b> of your <b>startup</b> idea?
          <Button />
        </div>
      </div>
    </>
  );
};
