import React from "react";
import "./nav.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

export const AuthNavBar = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");

  React.useEffect(() => {
    axios
      .get("http://localhost:4000/api/user/info", {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setUsername(res.data.username);
      });
  }, []);

  return (
    <>
      <nav>
        <div className="logo">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#E5D9F2",
            }}
          >
            <b>Startupeer</b>
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <div className="left">
            <div className="login">{username}</div>
          </div>
          <div
            className="button"
            style={{
              width: 150,
              fontFamily: "Jaldi",
              fontSize: 16,
              marginLeft: -30,
              color: "#151449",
            }}
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
          >
            Logout
          </div>
        </div>
      </nav>
    </>
  );
};
