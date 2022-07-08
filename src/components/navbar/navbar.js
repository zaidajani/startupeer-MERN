import React from "react";
import "./nav.css"

export const NavBar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <b>Startupeer</b>
        </div>
        <div className="left">
          <div className="login">
            Login
          </div>
          <div className="login">
            Register
          </div>
        </div>
      </nav>
    </>
  )
}