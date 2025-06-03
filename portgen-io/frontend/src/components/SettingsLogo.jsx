import "../style.css";
import settingsIcon from "../assets/settingIcon.png";

export default function SettingsLogo() {
  return (
    <img
      className="animate-spin h-[50%] w-[10%]"
      src={settingsIcon}
      alt="Rotating"
    />
  );
}


