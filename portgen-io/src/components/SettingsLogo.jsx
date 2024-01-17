import React from 'react';
import '../style.css'; 
import settingsIcon from "../assets/settingsIcon.png"
export default function SettingsLogo() {
    return (
        <div className="settings-logo">
            <img className="rotate" src={settingsIcon} alt="Rotating" />
        </div>
    );
}


