// import { useState } from "react";
import Name from "./SettingName.jsx";
import Logo from "./SettingsLogo.jsx";
import mainImage from "../assets/image 1MainProfile.png";
import SettingsTabPannel from "./SettingsTabPannel.jsx";

export default function SettingPage() {



  return (
    <div className="h-screen w-screen bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400">
      {/* Navigation */}
      <div className="flex items-center w-full p-4">
        <Logo />
        <p className="font-[Ribeye_Marrow] text-2xl ml-4">PROFILE SETTINGS</p>
      </div>

      {/* Content */}
      <div className="flex items-center h-[30%] px-8">
        <img src={mainImage} alt="Main Profile" className="mr-8 h-40 w-40" />
        <Name />
      </div>

      {/* Settings Panel */}
      <div className="relative top-[-46vh] left-[60vw] w-[40vw] h-[7vh] p-4">
        <div className="bg-white bg-opacity-80 backdrop-blur-lg rounded-lg shadow-lg">
          <SettingsTabPannel />
        </div>
      </div>
    </div>
  );
}