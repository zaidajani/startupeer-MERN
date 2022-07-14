import React, { useEffect } from "react";
import { AuthNavBar } from "../../components/navbar/authenticatedNav";
import { CardComp } from "../../components/card/card";
import { BriefProfile } from "../../components/card/briefProfile";
import axios from "axios";
import { Link } from "react-router-dom";

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
      setStartupsData(res.data.reverse());
    });
  }, []);

  return (
    <>
      <AuthNavBar username={data.username} />
      <div className="container mt4">
        <div className="tagline">
          <p className="ptagline">Startup ideas seeking for reviews.</p>
        </div>
        <div className="loginCardHolder">
          <BriefProfile
            username={data.username}
            avaText={data.username.charAt(0).toUpperCase()}
          />
        </div>
        <div className="cardContainer">
          {startupsdata.map((startup) => {
            return <Link to={`/detail/${startup._id}`} style={{
              textDecoration: 'none'
            }}><CardComp title={startup.name} brief={startup.brief} /></Link>;
          })}
        </div>
      </div>
    </>
  );
};
