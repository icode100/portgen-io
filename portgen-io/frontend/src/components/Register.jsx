import React from "react";
import register from "../assets/register_1.png"
import "../style.css"
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import PersonIcon from '@mui/icons-material/Person';
import {redirect,Link,useNavigate} from 'react-router-dom'

export default function Register(){
    const [registerState,setregisterState] = React.useState({
        UserName:"",
        Email:"",
        RecoveryPin:"",
        Password:"",
        CnfPass:""
    })
    const navigate = useNavigate()

    function HandleChange(event){
        setregisterState({
            ...registerState,
            [event.target.name]: event.target.value
        })
    }
    const handleNavigation = ()=>{
        navigate('/reglog/login')
    }
    return(
    <div className="register">
        <div className="register-header-nav">
            <button className="register-register-btn" disabled={true} >Register</button>
            <button className="register-login-btn" onClick={handleNavigation}>Login</button>
        </div>

        <img src={register} className="register-img" alt="register"/>

        <form action="#" className="register-form">
            <input type="text" name="UserName" placeholder={`Enter Your Username 👤`} className="register-form-username" /> 
            <input type="email" name="Email" className="register-form-email" placeholder = {`Enter your Email ✉️`} onChange={HandleChange}/>
            <input type="password" name="Password"  className="register-form-password" placeholder={`Enter Your Password 🔑`} onChange={HandleChange}/>
            <input type="password" name="CnfPass"  className="register-form-password" placeholder= {`Reneter Your Password 🔑`} onChange={HandleChange}/>
            <input type="password" name="RecoveryPin"  className="register-form-password" placeholder= {`Setup a recovery pin 🛂`} onChange={HandleChange}/>
            <button type="submit" className="register-form-submit">Register</button>
        </form>

        <div className="register-footer">
            Already Have an account? <Link to ="/reglog/login">Login</Link> here
        </div>
    </div>
    )
}