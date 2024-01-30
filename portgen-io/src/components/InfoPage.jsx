import React from "react";
import "../style.css";
import logo from "../assets/PortGenLogo.png";
import InfoComponent from "./InfoComponent";
import NavIcon from "./NavIcon";
import { Link } from "react-router-dom";
import profile from "../assets/image_extra1.png";

export default function InfoPage() {
  return (
    <div className="info-page">
      <nav className="info-page-nav">
        <Link to = '/'><img className="info-page-logo" src={logo} alt="" /></Link>
        <NavIcon className="info-page-profile"img={profile}/>
      </nav>
      <h1 className="info-page-title">Enter your info to be displayed on your protfolio</h1>
      <div className="info-page-body">
        <InfoComponent/>
      </div>
      <footer className="info-page-footer">
          <p>Copyright © 2024 PortgenIo.Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
