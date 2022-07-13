import React, { useEffect, useState } from "react"
import { NavBar } from "../components/navbar/navbar";
import { CardComp } from "../components/card/card";
import { LoginCard } from "../components/card/loginProposal";
import "./loggedout.css";
import axios from "axios";

export const LogoutView = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/user')
      .then(res => {
        setData(res.data);
      })
  }, []);

  return (
    <>
      <NavBar />
      <div className="container mt4">
        <div className="tagline">
          <p className="ptagline">Startup ideas seeking for reviews.</p>
        </div>
        <div className="loginCardHolder">
          <LoginCard />
        </div>
        <div className="cardContainer">
          {
            data.map(startup => {
              return (
                <CardComp title={startup.name} brief={startup.brief} />
              )
            })
          }
        </div>
      </div>
    </>
  );
};
