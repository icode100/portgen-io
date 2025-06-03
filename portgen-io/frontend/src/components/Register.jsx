import { useState } from "react";
import register from "../assets/register_1.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [registerState, setRegisterState] = useState({
    UserName: "",
    Email: "",
    RecoveryPin: "",
    Password: "",
    CnfPass: "",
  });
  const [alert, setAlert] = useState({ open: false, type: "", message: "" });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setRegisterState({
      ...registerState,
      [event.target.name]: event.target.value,
    });
  };

  const handleNavigation = () => {
    navigate("/reglog/login");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://portgen-io.vercel.app/portapi/v1/reglog/register",
        registerState
      );
      console.log("Registration successful:", response.data);
      setAlert({ open: true, type: "success", message: "Registration successful!" });
      setTimeout(() => navigate("/reglog/login"), 2000); // Redirect after 2 seconds
    } catch (error) {
      console.error("Registration failed:", error);
      setAlert({ open: true, type: "error", message: "Registration failed!" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-transparent backdrop-blur-[100px] h-[600px] w-[400px] rounded-[30px] mx-auto mt-20">
      {/* Header Navigation */}
      <div className="flex justify-between w-[90%] mb-6">
        <button
          className="w-[100px] h-[40px] rounded-[30px] bg-blue-400 text-white"
          disabled
        >
          Register
        </button>
        <button
          className="w-[100px] h-[40px] rounded-[30px] bg-blue-200 text-white"
          onClick={handleNavigation}
        >
          Login
        </button>
      </div>

      {/* Register Image */}
      <img
        src={register}
        alt="Register"
        className="w-[160px] h-[100px] mb-6 object-contain"
      />

      {/* Register Form */}
      <form
        className="flex flex-col items-center w-full"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="UserName"
          placeholder="Enter Your Username 👤"
          className="w-[300px] h-[30px] rounded-[30px] bg-blue-300/60 px-4 mb-4 placeholder-gray-700"
          onChange={handleChange}
        />
        <input
          type="email"
          name="Email"
          placeholder="Enter your Email 📩"
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
        <input
          type="password"
          name="CnfPass"
          placeholder="Re-enter Your Password 🔑"
          className="w-[300px] h-[30px] rounded-[30px] bg-blue-300/60 px-4 mb-4 placeholder-gray-700"
          onChange={handleChange}
        />
        <input
          type="password"
          name="RecoveryPin"
          placeholder="Setup a recovery pin 🛂"
          className="w-[300px] h-[30px] rounded-[30px] bg-blue-300/60 px-4 mb-4 placeholder-gray-700"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-[300px] h-[30px] rounded-[30px] bg-pink-300 text-white"
        >
          Register
        </button>
      </form>

      {/* Footer */}
      <div className="mt-6 text-center">
        Already have an account?{" "}
        <Link to="/reglog/login" className="text-blue-500 hover:underline">
          Login
        </Link>{" "}
        here
      </div>

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