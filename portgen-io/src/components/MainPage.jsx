import React from 'react'
import Logo from "../assets/PortGenLogo.png";
import BackGround from "../assets/Vector 17.svg";
import PortfolioCat from "./MainPgPortCatSet.jsx";
import Prop1 from "../assets/Vector 23.svg";
import Prop2 from "../assets/Vector 24.svg";
import Prop3 from "../assets/Vector 25.svg";
import Prop4 from "../assets/Vector 26.svg";
import "../style.css";
import { Link } from 'react-router-dom';

// data : [{title:
//          images:}]

export default function MainPage(props) {
  let data = props.data;
  let totalSets = [];
  for(let i = 0; i < data.length; i++) {
    totalSets.push(<PortfolioCat key={i} title={data[i].title} images={data[i].images} />);
  }

  return (
    <div id="mainpage">

      <div id ="mainpage-back">
         <img  src={BackGround} alt=""/>
      </div>

      <div id = "mainPageNavBar"> 
        <Link to = '/'><img src={Logo} alt="" /></Link>
        {/* <Profile/> */}
      </div>

      {/* <div className="propsblueMainPage">
        <img src={Prop1} alt="" id="prop1" class="propMain"/>
        <img src={Prop2} alt="" id="prop2" class="propMain"/>
        <img src={Prop3} alt="" id="prop3" class="propMain"/>
        <img src={Prop4} alt="" id="prop4" class="propMain"/>
      </div> */}
      <div class = "here-mainpage">
        <div id="mainPageBody">
          {totalSets}    
        </div>

        <div className="mainPagefotter">
          <p>Copyright © 2024 PortgenIo.Inc. All rights reserved.</p>
        </div>
      </div>
    
    </div>
  
  )
}
