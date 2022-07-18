import React from "react";
import { AuthNavBar } from "../../components/navbar/authenticatedNav";
import { CardComp } from "../../components/card/card";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";
import axios from "axios";

export const ProfileScreen = () => {
  const [data, setData] = React.useState([{ name: '' }, []]);

  React.useEffect(() => {
    const ids = jwtDecode(localStorage.getItem("token"));
    axios
      .get("http://localhost:4000/api/user/userInfo/" + ids._id)
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <>
      <AuthNavBar />
      <div className="container mt4">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexDirection: "column",
              width: "20%",
              marginTop: 50,
              marginRight: 100,
              height: 300,
            }}
          >
            <div className="briefavatar">{data[0].name.charAt(0).toUpperCase()}</div>
            <div
              className="name"
              style={{
                fontSize: 23,
                color: "#151449",
              }}
            >
              {data[0].name}
            </div>
          </div>
          <div className="cardContainer">
            <div
              className="tagline"
              style={{
                position: "absolute",
              }}
            >
              <p className="ptagline">Your startup ideas</p>
            </div>
            {data[1].map((startup) => {
              return (
                <Link to={"/detail/" + startup._id} style={{
                  textDecoration: 'none'
                }}>
                  <CardComp title={startup.name} brief={startup.brief} />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};
