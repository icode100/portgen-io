import React from "react";
import "../style.css";
import logo from "../assets/PortGenLogo.png";
import rec from "../assets/rectangle.png"
import hi from "../assets/hi-hello.gif";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie'
import NavIcon from "./NavIcon";
import profile from '../assets/image_extra1.png'

export default function HomePage () {
  console.log(Cookies.get("token")===undefined);
  const isvalidated = Cookies.get('token')===undefined;
  console.log(isvalidated)
  return (
    <div className="home-page">
        <div className="nav-bar">
            <Link to='/'><img id="portgen" src={logo} alt="logo" /></Link>
            {isvalidated ?  <Link to = '/reglog/register'><p id="register">Register/Login</p></Link>: <div style={{marginRight:"10px"}}><NavIcon img={profile}/></div>}            
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