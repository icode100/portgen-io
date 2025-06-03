import { Outlet } from "react-router-dom";
import vector_16 from "../assets/vector-16.png";
import vector_15 from "../assets/vector-15.png";
import vector_8 from "../assets/vector-8.png";
import logo from "../assets/PortGenLogo.png";

export default function RegisterLogin() {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      <div className="relative flex flex-col items-center justify-center bg-white bg-opacity-80 backdrop-blur-lg rounded-lg shadow-lg w-full max-w-4xl h-[90vh]">
        {/* Logo */}
        <img
          src={logo}
          className="absolute top-[-5rem] w-32"
          alt="PortGen.IO"
        />

        {/* Background Vectors */}
        <img
          className="absolute top-[70%] left-[60%] w-[500px] opacity-50 transform -translate-x-1/2 -translate-y-1/2"
          alt="Vector"
          src={vector_15}
        />
        <img
          className="absolute top-[10%] right-[10%] w-[150px] opacity-50"
          alt="Vector"
          src={vector_16}
        />
        <img
          className="absolute bottom-[10%] left-[10%] w-[100px] opacity-50"
          alt="Vector"
          src={vector_8}
        />

        {/* Register/Login Frame */}
        <div className="relative w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
}