import React from "react";
import "../style.css";
import logo from "../assets/PortGenLogo.png";
import rec from "../assets/rectangle.png"
import hi from "../assets/hi-hello.gif";



export default function HomePage () {
  return (
    <div className="home-page">
        <div className="nav-bar">
            <img id="portgen" src={logo} alt="logo" />
            <p id="register">Register</p>
        </div>
        <div className="body">
            <p id="headline-body-homePage">Create a stunning portfolio in minutes !</p>
            <div className="footer-HomePage">
                <img id ="hi" src={hi} alt="" />
                <img id ="rec" src={rec} alt="back" /> 
            </div>
        </div>
    </div>
  );
};
