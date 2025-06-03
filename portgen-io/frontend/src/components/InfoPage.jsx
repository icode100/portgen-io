// import React from "react";
import logo from "../assets/PortGenLogo.png";
import InfoComponent from "./InfoComponent";
import NavIcon from "./NavIcon";
import { Link } from "react-router-dom";
import profile from "../assets/image_extra1.png";

export default function InfoPage() {
  return (
    <div
      className="flex flex-col bg-no-repeat w-full h-[2012px]"
      style={{
        backgroundImage: "url(./assets/info-page.png)",
      }}
    >
      {/* Navigation Bar */}
      <nav className="flex justify-between bg-[#FFF8F8] p-4 shadow-md">
        <Link to="/">
          <img className="h-10" src={logo} alt="PortGen.IO Logo" />
        </Link>
        <NavIcon img={profile} />
      </nav>

      {/* Title */}
      <h1 className="font-serif text-lg relative top-[5vh] ml-[5vw]">
        Enter your info to be displayed on your portfolio
      </h1>

      {/* Body */}
      <div className="flex relative top-[30rem] justify-start items-center">
        <InfoComponent />
      </div>

      {/* Footer */}
      <footer className="flex items-center justify-center bg-[#A4EAF9] font-serif text-lg relative top-[5vh] w-full h-20 mt-[1300px]">
        <p>Copyright © 2024 PortgenIo.Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}