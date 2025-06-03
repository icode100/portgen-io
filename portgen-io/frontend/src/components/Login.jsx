import { useState } from "react";
import login from "../assets/login_1.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [loginState, setLoginState] = useState({
    Email: "",
    Password: "",
  });
  const [alert, setAlert] = useState({ open: false, type: "", message: "" });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setLoginState({
      ...loginState,
      [event.target.name]: event.target.value,
    });
  };

  const handleNavigation = () => {
    navigate("/reglog/register");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://portgen-io.vercel.app/portapi/v1/reglog/login",
        loginState,
        { withCredentials: true }
      );
      console.log("Login successful:", response.data);
      setAlert({ open: true, type: "success", message: "Login successful!" });
      setTimeout(() => navigate("/main"), 2000); // Redirect after 2 seconds
    } catch (error) {
      console.error("Login failed:", error);
      setAlert({ open: true, type: "error", message: "Login failed!" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-transparent backdrop-blur-[100px] h-[500px] w-[400px] rounded-[30px] mx-auto mt-20">
      {/* Header Navigation */}
      <div className="flex justify-between w-[90%] mb-6">
        <button
          className="w-[100px] h-[40px] rounded-[30px] bg-blue-400 text-white"
          onClick={handleNavigation}
        >
          Register
        </button>
        <button
          className="w-[100px] h-[40px] rounded-[30px] bg-blue-200 text-white"
          disabled
        >
          Login
        </button>
      </div>

      {/* Login Image */}
      <img
        src={login}
        alt="Login"
        className="w-[100px] h-[160px] mb-6 object-contain"
      />

      {/* Login Form */}
      <form
        className="flex flex-col items-center w-full"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="Email"
          placeholder="Enter your Email ✉"
          className="w-[300px] h-[30px] rounded-[30px] bg-blue-300/60 px-4 mb-4 placeholder-gray-700"
          onChange={handleChange}
        />
        <input
          type="password"
          name="Password"
          placeholder="Enter Your Password 🔑"
          className="w-[300px] h-[30px] rounded-[30px] bg-blue-300/60 px-4 mb-4 placeholder-gray-700"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-[300px] h-[30px] rounded-[30px] bg-pink-300 text-white"
        >
          Login
        </button>
      </form>

      {/* Alert */}
      {alert.open && (
        <div
          className={`mt-6 px-4 py-2 rounded-lg text-white ${
            alert.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {alert.message}
        </div>
      )}
    </div>
  );
}