import React from "react";
import { NavBar } from "../components/navbar/navbar";
import { AuthNavBar } from "../components/navbar/authenticatedNav";
import "./loggedout.css";
import { Avatar } from "../components/avatar/avatar";
import { useParams } from "react-router-dom";
import { Button } from "../components/button/button";
import { format } from "timeago.js";
import axios from "axios";

export const StartupDetail = () => {
  const params = useParams();
  const [data, setData] = React.useState({});
  const [authdata, setAuthData] = React.useState({});
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      setUser(true);
    } else {
      setUser(false);
    }

    axios
      .get(`http://localhost:4000/api/user/${params.id}`, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setData(res.data);
        axios
          .get(`http://localhost:4000/api/user/userInfo/${res.data.author}`)
          .then((res2) => {
            setAuthData(res2.data);
          });
      });
  }, []);

  return (
    <>
      {user ? <AuthNavBar /> : <NavBar />}
      <div className="container mt4">
        <div className="avatarFlex">
          <Avatar />
          <div className="infoFlex">
            <p className="urlLabel">/{params.id}</p>
            <p className="info">
              Posted {format(data.dof)} · {authdata.name}
            </p>
          </div>
        </div>
        <div className="title mt4">
          <p>
            <b>{data.name}</b> - {data.brief}
          </p>
        </div>
        <div className="description mt4">
          <p>{data.explaination}</p>
        </div>
        <div className="buttonDiff">
          <p>Post your opinions</p>
        </div>
      </div>
    </>
  );
};
