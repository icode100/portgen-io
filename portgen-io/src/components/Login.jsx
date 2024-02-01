import React from "react";
import login from "../assets/login_1.png"
import "../style.css"
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";
export default function Login(){
    const [loginState,setLoginState] = React.useState({
        Email:"",
        Password:""
    })
    const navigate = useNavigate();
    function HandleChange(event){
        setLoginState({
            ...loginState,
            [event.target.name]: event.target.value
        })
    }
    const handleNavigation = ()=>{
        navigate('/reglog/register')
    }
    return(
    <div className="login">
        <div className="login-header-nav">
            <button className="login-register-btn" onClick={handleNavigation}>Register</button>
            <button className="login-login-btn" disabled={true} >Login</button>
        </div>

        <img src={login} className="login-img" alt="login"/>

        <form action="#" className="login-form">
            <input type="email" name="Email" className="login-form-email" placeholder = {`Enter your Email ✉️`}  onChange={HandleChange}/>
            <input type="password" name="Password"  className="login-form-password" placeholder= {`Enter Your Password 🔑`}  onChange={HandleChange}/>
            <button type="submit" className="login-form-submit">Login</button>
        </form>
    </div>
    )
}