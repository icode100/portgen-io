import React, {useState} from 'react';
import Name from "./SettingName.jsx";
import Logo from "./SettingsLogo.jsx";
import mainImage from "../assets/image 1MainProfile.png";
import "../style.css"

export default function SettingPage() {

    const [inputData, setInputData] = useState({
        username:"",
        email:""
    })

    function handleChange(event){
        setInputData(prev =>{
            return {
               ...prev,
                [event.target.name]:event.target.value
            }
        })
    }

  return (
    <div class = "setting-body">
        <div className="setting-nav">
           <Logo/>
           <p>PROFILE SETTINGS</p>
        </div>
        <div className="setting-content">
            <img  src={mainImage} alt="" />
            <Name/>
        </div>
        <div class ="setting-details-whole">
            <div class ="setting-details">
                <div >
                    <label htmlFor="changeUsername">Change Username</label>
                    <input type="text" id="changeUsername" name="username" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="changeEmail">Change Email</label>
                    <input type="text" id="changeEmail" name="email" onChange={handleChange}/>
                </div>
            </div>
            <div class="setting-avtar">
                <p>Choose your icon</p>
            </div>
        </div>
    </div>
  )
}
