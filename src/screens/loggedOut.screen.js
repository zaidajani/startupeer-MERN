import { NavBar } from "../components/navbar/navbar";
import { CardComp } from "../components/card/card";
import { LoginCard } from "../components/card/loginProposal";
import "./loggedout.css";

export const LogoutView = () => {
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
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
        </div>
      </div>
    </>
  );
};
