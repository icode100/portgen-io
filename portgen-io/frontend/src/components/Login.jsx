import React from "react";
import { useState } from "react";
import login from "../assets/login_1.png";
import "../style.css";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import { Alert, Snackbar } from "@mui/material";
import axios from 'axios'
export default function Login() {
  const [loginState, setLoginState] = React.useState({
    Email: "",
    Password: "",
  });
  const navigate = useNavigate();
  function HandleChange(event) {
    setLoginState({
      ...loginState,
      [event.target.name]: event.target.value,
    });
  }
  const handleNavigation = () => {
    navigate("/reglog/register");
  };

  const [openAlert, setOpenAlert] = useState(false); // State for managing Alert visibility
  const [alertSeverity, setAlertSeverity] = useState(""); // State for Alert severity

  const handleAlertClose = () => {
    setOpenAlert(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/portapi/v1/reglog/login", loginState, {withCredentials: true});
      console.log("login successful:", response.data);
      setOpenAlert(true);
      setAlertSeverity("success"); // Set success severity
      setTimeout(() => navigate("/"), 2000); // Redirect after 2 seconds
    } catch (error) {
      console.error("login failed:", error);
      setOpenAlert(true);
      setAlertSeverity("error"); // Set error severity
    }
  };

  return (
    <div className="login">
      <div className="login-header-nav">
        <button className="login-register-btn" onClick={handleNavigation}>
          Register
        </button>
        <button className="login-login-btn" disabled={true}>
          Login
        </button>
      </div>

      <img src={login} className="login-img" alt="login" />

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="Email"
          className="login-form-email"
          placeholder={`Enter your Email ✉️`}
          onChange={HandleChange}
        />
        <input
          type="password"
          name="Password"
          className="login-form-password"
          placeholder={`Enter Your Password 🔑`}
          onChange={HandleChange}
        />
        <button type="submit" className="login-form-submit">
          Login
        </button>
      </form>
      <Snackbar
        open={openAlert}
        autoHideDuration={6000} // Automatically close after 6 seconds
        onClose={handleAlertClose}
      >
        <Alert severity={alertSeverity}>
          {alertSeverity === "success"
            ? "login successful!"
            : "login failed!"}
        </Alert>
      </Snackbar>
    </div>
  );
}
