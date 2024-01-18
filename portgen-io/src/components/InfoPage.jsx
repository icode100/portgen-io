import React from "react";
import "../style.css";
import vector_33 from "../assets/vector-33.svg"
import vector_34 from "../assets/vector-34.svg"
import vector_35 from "../assets/vector-35.svg"
import vector_36 from "../assets/vector-36.svg"
import vector_37 from "../assets/vector-37.svg"
import vector_38 from "../assets/vector-38.svg"
import vector_39 from "../assets/vector-39.svg"
import logo from "../assets/PortGenLogo.png"
export default function InfoPage(){
    return (
        <div className="info-page">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <img className="vector" alt="Vector" src={vector_35} />
                    <img className="img" alt="Vector" src={vector_38} />
                    <img className="vector-2" alt="Vector" src={vector_36} />
                    <img className="vector-3" alt="Vector" src={vector_39} />
                    <img className="vector-4" alt="Vector" src={vector_34} />
                    <img className="vector-5" alt="Vector" src={vector_37} />
                    <img className="vector-6" alt="Vector" src={vector_33} />
                    <div className="header" />
                    <p className="text-wrapper">Enter your info to be displayed on your protfolio</p>
                    <div className="copy-right">
                        <div className="overlap-group">
                            <p className="div">Copyright © 2024 PortgenIo.Inc. All rights reserved.</p>
                        </div>
                    </div>
                    <img className="portgen-io" alt="Portgen io" src={logo} />
                </div>
            </div>
        </div>
    );
};
