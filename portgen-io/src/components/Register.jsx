import React from "react";
import register from "../assets/register_1.png"
import "../style.css"
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import PersonIcon from '@mui/icons-material/Person';
export default function Register(){
    const [registerState,setregisterState] = React.useState({
        userName:"",
        Email:"",
        Password:"",
        cnfPass:""
    })

    function HandleChange(event){
        setregisterState({
            ...registerState,
            [event.target.name]: event.target.value
        })
    }

    return(
    <div className="register">
        <div className="register-header-nav">
            <button className="register-register-btn" disabled="true" >Register</button>
            <button className="register-login-btn">Login</button>
        </div>

        <img src={register} className="register-img" alt="register"/>

        <form action="#" className="register-form">
            <input type="text" name="userName" placeholder={`Enter Your Username 👤`} className="register-form-username" /> 
            <input type="email" name="Email" className="register-form-email" placeholder = {`Enter your Email ✉️`} onChange={HandleChange}/>
            <input type="password" name="Password"  className="register-form-password" placeholder={`Enter Your Password 🔑`} onChange={HandleChange}/>
            <input type="password" name="cnfPass"  className="register-form-password" placeholder= {`Reneter Your Password 🔑`} onChange={HandleChange}/>
            <button type="submit" className="register-form-submit">Register</button>
        </form>

        <div className="register-footer">
            Already Have an account? <a href="#">Login</a> here
        </div>
    </div>
    )
}