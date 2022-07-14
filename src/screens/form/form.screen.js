import React from "react";
import { AuthNavBar } from "../../components/navbar/authenticatedNav";
import { CardComp } from "./../../components/card/card";
import axios from "axios";

export const Form = () => {
  const [name, setName] = React.useState("");
  const [brief, setBrief] = React.useState("");
  const [explain, setExplain] = React.useState("");
  const [error, setError] = React.useState("");

  const addStartup = () => {
    if (!name || !brief || !explain) {
      return setError("Please fill in all the fields");
    }
    if (name.length > 20) {
      return setError("Name must be shorter than 20 chars");
    }
    if (brief.length > 100) {
      return setError("Brief must be shorter than 50 chars");
    }
    if (explain.length > 2000) {
      return setError("Brief must be shorter than 2000 chars");
    }
    axios
      .post('http://localhost:4000/api/user/newBusiness', {
        "name": name,
        "brief": brief,
        "explaination": explain
      }, {
        headers: {
          'x-auth-token': localStorage.getItem('token')
        }
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        setError(err);
      })
  };

  return (
    <>
      <AuthNavBar />
      <div className="container mt4">
        <div className="tagline">
          <p className="ptagline">
            Post the startup idea in your mind to get market review about it.
          </p>
        </div>
        <div className="inline">
          <div>
            <div className="field mt4">
              <p className="label">Name of your startup ( 20 chars )</p>
              <input
                className="inp"
                style={{
                  width: 500,
                }}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="field">
              <p className="label">Brief your startup ( 200 chars )</p>
              <textarea
                className="inp"
                style={{
                  width: 500,
                  height: "100px",
                }}
                onChange={(e) => {
                  setBrief(e.target.value);
                }}
              />
            </div>
            <div className="field">
              <p className="label">Explain your startup ( 200 chars )</p>
              <textarea
                className="inp"
                style={{
                  width: 500,
                  height: "300px",
                }}
                onChange={(e) => {
                  setExplain(e.target.value);
                }}
              />
            </div>
          </div>
          <div
            style={{
              width: 500,
              position: "absolute",
              right: 0,
            }}
          >
            <div>
              {error && (
                <div
                  className="errorDiv"
                  style={{
                    width: "90%",
                  }}
                >
                  {error}
                </div>
              )}
              <div
                className="label"
                style={
                  error
                    ? {
                        position: "absolute",
                        top: 70,
                      }
                    : {
                        position: "absolute",
                        top: 20,
                      }
                }
              >
                <p>Thumbnail card preview.</p>
              </div>
              <CardComp title={name} brief={brief} />
              <div
                className="button"
                style={{
                  backgroundColor: "#7371FC",
                  color: "white",
                  fontSize: 18,
                  fontFamily: "Inter",
                  marginTop: 40,
                  "&:hover": {
                    backgroundColor: "#5452FF",
                  },
                }}
                onClick={addStartup}
              >
                Post.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
