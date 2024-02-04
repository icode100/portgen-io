import React from "react";
// import Register from "./Register";
// import Login from "./Login";
import {Outlet} from 'react-router-dom'
import vector_16 from "../assets/vector-16.png"
import vector_15 from "../assets/vector-15.png"
import vector_8 from "../assets/vector-8.png"
import logo from "../assets/PortGenLogo.png"

export default function RegisterLogin(){
    return(
        <div className="register-login-page">
            <div className="register-login-component">
                <img src={logo} className="logo" alt="PortGen.IO"/>
                <img className="vector-15" alt="Vector" src={vector_15} />
                <img className="vector-16" alt="Vector" src={vector_16} />
                <img className="vector-8" alt="Vector" src={vector_8}/>
                <div className="register-login-frame">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
    
}
