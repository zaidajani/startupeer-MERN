import React from "react";
import { AuthNavBar } from "./../../components/navbar/authenticatedNav";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const Review = () => {
  const params = useParams();
  const [review, setReview] = React.useState('');
  const [data, setData] = React.useState('');
  const navigate = useNavigate();

  React.useEffect(() => {
    axios
      .get('http://localhost:4000/api/user/' + params.id)
      .then(res => {
        setData(res.data);
      })
  }, []);

  const postReview = () => {
    axios
      .post(`http://localhost:4000/api/user/review/${params.id}`, {
        ros: review
      }, {
        headers: {
          'x-auth-token': localStorage.getItem('token')
        }
      })
      .then((res) => {
        alert('Your review has been made');
        navigate(`/detail/${params.id}`);
      })
  }

  return (
    <>
      <AuthNavBar />
      <div className="container mt4">
        <div className="tagline">
          <p className="ptagline">Post your review for { data.name }</p>
          <div className="inline">
            <div>
              <div className="field mt4">
                <p className="label">Your review (1000 characters)</p>
                <textarea
                  className="inp"
                  style={{
                    width: 500,
                    height: 250,
                    marginTop: 20,
                  }}
                  onChange={(e) => {
                    setReview(e.target.value);
                  }}
                />
              </div>
              <div
                className="button"
                style={{
                  backgroundColor: "#C4A0FF",
                  fontFamily: "Jaldi",
                  marginTop: 20,
                }}
                onClick={postReview}
              >
                Post review
              </div>
            </div>
            <div
              style={{
                width: 500,
                position: "absolute",
                height: "100%",
                top: 55,
                right: 0,
                backgroundColor: "#D3B9FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 70,
              }}
            >
              <p
                style={{
                  position: "absolute",
                  fontSize: 60,
                  fontFamily: "Jaldi",
                  color: "white",
                  padding: 60,
                  fontWeight: 600
                }}
              >
                "Your review will help humanity evolve."
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
