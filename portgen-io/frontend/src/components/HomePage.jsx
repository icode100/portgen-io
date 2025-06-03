import logo from "../assets/PortGenLogo.png";
import rec from "../assets/rectangle.png";
import hi from "../assets/hi-hello.gif";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import NavIcon from "./NavIcon";
import profile from "../assets/image_extra1.png";

export default function HomePage() {
  const isValidated = Cookies.get("token") === undefined;

  return (
    <div className="bg-pink-100 h-screen w-screen">
      {/* Navigation Bar */}
      <div className="bg-gradient-to-r from-purple-300 via-pink-100 to-transparent backdrop-blur-md flex justify-between items-center h-14 px-6 shadow-md">
        <Link to="/">
          <img src={logo} alt="PortGen.IO" className="h-10" />
        </Link>
        {isValidated ? (
          <Link to="/reglog/register">
            <p className="text-black font-serif hover:text-pink-500 transition duration-300">
              Register/Login
            </p>
          </Link>
        ) : (
          <div className="mr-2">
            <NavIcon img={profile} />
          </div>
        )}
      </div>

      {/* Body Section */}
      <div className="flex flex-col items-center justify-center h-[calc(100%-3.5rem)]">
        <p className="text-center font-serif text-2xl px-4">
          Create a stunning portfolio in minutes!
        </p>
        <div className="flex justify-around w-full mt-6">
          <img src={hi} alt="Hi" className="h-1/3 w-1/3" />
          <img src={rec} alt="Background" className="h-1/3 w-1/3" />
        </div>
      </div>
    </div>
  );
}