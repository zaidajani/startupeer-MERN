import React from "react";
import "./card.css";

export const CardComp = ({ title, brief }) => {
  return (
    <>
      <div className="card">
        <div className="cardText">
          <p>
          <b>{title}</b>
            , {brief}
          </p>
        </div>
        <div className="cardLabel" style={{
          fontFamily: 'Inter'
        }}>
          <b>{title}</b>
        </div>
      </div>
    </>
  );
};
