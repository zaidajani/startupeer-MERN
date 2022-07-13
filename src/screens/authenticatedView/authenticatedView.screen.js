import React, { useEffect } from "react";
import { AuthNavBar } from "../../components/navbar/authenticatedNav";
import { CardComp } from "../../components/card/card";
import { BriefProfile } from "../../components/card/briefProfile";
import axios from "axios";

export const AuthenticatedView = () => {
  const [data, setData] = React.useState({ username: "" });
  const [startupsdata, setStartupsData] = React.useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/user/info", {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setData(res.data);
      });

    axios.get("http://localhost:4000/api/user").then((res) => {
      setStartupsData(res.data);
    });
  }, []);

  return (
    <>
      <AuthNavBar username={data.username} />
      <div className="container mt4">
        <div className="loginCardHolder">
          <BriefProfile username={data.username} avaText={data.username.charAt(0).toUpperCase()} />
        </div>
        <div className="cardContainer">
          {startupsdata.map((startup) => {
            return <CardComp title={startup.name} brief={startup.brief} />;
          })}
        </div>
      </div>
    </>
  );
};
