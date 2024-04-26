import React from "react";
import TextField  from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from 'axios'
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";




export default function SettingPass(){
    const [settingPass,setPass] = React.useState({
        email:"",
        pass:"",
        cnfpass:''
    })
    function handleChange(event){
        setPass({
            ...settingPass,
            [event.target.name]: event.target.value
        })
    }
    const navigate = useNavigate();
    async function handleSubmit(event) {
        event.preventDefault();
      
        try {
          const url = "http://localhost:5000/portapi/v1/settings/changepass";
          const token = Cookies.get('token')
          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', // Set for JSON data
              'Authorization':`Bearer ${token}`
            },
            body: JSON.stringify(settingPass) // Convert data to JSON string
          };
      
          const response = await fetch(url, options);
      
          if (!response.ok) {
            throw new Error(`Error: ${response.status}`); // Handle non-2xx status codes
          }
      
          const data = await response.json();
          console.log("login successful:", data);
      
          // Your success logic here (e.g., redirect after 2 seconds)
          setTimeout(() => {
            Cookies.remove("token");
            navigate('/');
          }, 2000);
      
        } catch (error) {
          console.error("login failed:", error);
        }
      }

    console.log(settingPass)
    return(
        <>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                    <TextField
                    label="Email"
                    placeholder="Enter your Email"
                    multiline
                    name='email'
                    type='email'
                    onChange={handleChange}
                    value={settingPass.recovery}
                    />
                    <TextField
                    label="New Password"
                    placeholder="Enter your new Password"
                    multiline
                    type='Password'
                    name='pass'
                    onChange={handleChange}
                    value={settingPass.pass}
                    />
                    <TextField
                    label="Confirm Password"
                    placeholder="Re-enter your password"
                    multiline
                    type='Password'
                    name='cnfpass'
                    onChange={handleChange}
                    value={settingPass.cnfpass}
                    />
                    <Button variant='contained' color="success" type="submit">Submit</Button>
                </Stack>
            </form>
        </>
    )
}