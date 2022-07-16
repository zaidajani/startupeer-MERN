import React from "react";
import { NavBar } from "../components/navbar/navbar";
import { AuthNavBar } from "../components/navbar/authenticatedNav";
import "./loggedout.css";
import { Avatar } from "../components/avatar/avatar";
import { useParams, Link } from "react-router-dom";
import { Button } from "../components/button/button";
import { format } from "timeago.js";
import axios from "axios";

export const StartupDetail = () => {
  const params = useParams();
  const [data, setData] = React.useState({ reviews: [] });
  const [authdata, setAuthData] = React.useState({});
  const [reviews, setReviews] = React.useState([]);
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
        setReviews(res.data.reviews.reverse());
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
            <p className="urlLabel">/detail/{params.id}</p>
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
        <Link
          to={`/detail/review/${params.id}`}
          style={{
            textDecoration: "none",
          }}
        >
          <div className="buttonDiff">
            <p>Post your opinions</p>
          </div>
        </Link>
        <div
          className="title mt4"
          style={{
            fontSize: 17,
          }}
        >
          <b>Past 5 reviews</b>
          <div
            className="infoFlex"
            style={{
              margin: 30,
              marginLeft: 0,
            }}
          >
            {reviews.map((review, index) => {
              if (index == 5) {
                return;
              }
              return (
                <>
                  <p
                    style={{
                      fontWeight: 400,
                      marginLeft: 0,
                      marginTop: 25,
                      fontSize: 17,
                      width: 800,
                    }}
                    className="urlLabel"
                  >
                    {review.ros}
                  </p>
                  <p
                    className="info"
                    style={{
                      marginLeft: 0,
                      marginTop: 15,
                    }}
                  >
                    Made {format(review.dom)}
                  </p>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
