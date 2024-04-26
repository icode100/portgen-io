import React from "react";
import { useState } from "react";
import register from "../assets/register_1.png";
import "../style.css";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import PersonIcon from "@mui/icons-material/Person";
import { redirect, Link, useNavigate } from "react-router-dom";
import { Alert, Snackbar } from "@mui/material";
import axios from 'axios';



export default function Register() {
  const [registerState, setregisterState] = React.useState({
    UserName: "",
    Email: "",
    RecoveryPin: "",
    Password: "",
    CnfPass: "",
  });
  const navigate = useNavigate();

  function HandleChange(event) {
    setregisterState({
      ...registerState,
      [event.target.name]: event.target.value,
    });
  }
  const handleNavigation = () => {
    navigate("/reglog/login");
  };
  const [openAlert, setOpenAlert] = useState(false); // State for managing Alert visibility
  const [alertSeverity, setAlertSeverity] = useState(""); // State for Alert severity

  const handleAlertClose = () => {
    setOpenAlert(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(registerState)

    try { 
      const response = await axios.post("http://localhost:5000/portapi/v1/reglog/register", registerState);
      console.log("Registration successful:", response.data);
      localStorage.setItem("portGentoken", response.data.token);
      setOpenAlert(true);
      setAlertSeverity("success"); // Set success severity
      setTimeout(() => navigate("/reglog/login"), 2000); // Redirect after 2 seconds
    } catch (error) {
      console.error("Registration failed:", error);
      setOpenAlert(true);
      setAlertSeverity("error"); // Set error severity
    }
  };

  return (
    <div className="register">
      <div className="register-header-nav">
        <button className="register-register-btn" disabled={true}>
          Register
        </button>
        <button className="register-login-btn" onClick={handleNavigation}>
          Login
        </button>
      </div>

      <img src={register} className="register-img" alt="register" />

      <form className="register-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="UserName"
          placeholder={`Enter Your Username 👤`}
          className="register-form-username"
          onChange={HandleChange}
        />
        <input
          type="email"
          name="Email"
          className="register-form-email"
          placeholder={`Enter your Email 📩`}
          onChange={HandleChange}
        />
        <input
          type="password"
          name="Password"
          className="register-form-password"
          placeholder={`Enter Your Password 🔑`}
          onChange={HandleChange}
        />
        <input
          type="password"
          name="CnfPass"
          className="register-form-password"
          placeholder={`Reneter Your Password 🔑`}
          onChange={HandleChange}
        />
        <input
          type="password"
          name="RecoveryPin"
          className="register-form-password"
          placeholder={`Setup a recovery pin 🛂`}
          onChange={HandleChange}
        />
        <button type="submit" className="register-form-submit" >
          Register
        </button>
      </form>

      <div className="register-footer">
        Already Have an account? <Link to="/reglog/login">Login</Link> here
      </div>

      <Snackbar
        open={openAlert}
        autoHideDuration={6000} // Automatically close after 6 seconds
        onClose={handleAlertClose}
      >
        <Alert severity={alertSeverity}>
          {alertSeverity === "success" ? "Registration successful!" : "Registration failed!"}
        </Alert>
      </Snackbar>
    </div>
  );
}
