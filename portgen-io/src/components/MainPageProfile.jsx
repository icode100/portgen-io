import React, {useState} from 'react'
import MainProfile from "../assets/image 1MainProfile.png";
import Third from "../assets/profile_settingssetPro3rd.png";
import Second from "../assets/info_page_linksetPro2nd.png";
import One from "../assets/gallerysetProGal.png";
import BackGround from "../assets/Vector 17.svg"
// import { useState } from "react";
import "../style.css";

export default function MainPageProfile() {
  const [show, setShow] = useState(false);

  function HandleOnClick() {
    setShow(!show)
  };

  return (
    <div class = "tobepopulated">
      { show && (
        <div id ="here"> 
          <div>
          <img src={One} class = "insideToBePopulated"  alt="one" />
          <img src={Second} class = "insideToBePopulated" alt="one" />
          <img src={Third} class = "insideToBePopulated" alt="one" />
          </div>
        </div>
      )}
      <img src={MainProfile} onClick = {HandleOnClick} alt="profile" id ="profileMain" />
      {/* <img src={BackGround} class = "mainpage-back"  alt="one" /> */}
  
    </div>
  )
}


