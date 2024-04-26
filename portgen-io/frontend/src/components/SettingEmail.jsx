import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";
export default function SettingEmail() {

    const [settingEmail, setEmail] = React.useState({
        Email: "",
        NewEmail: ""
    })
    function handleChange(event) {
        setEmail({
            ...settingEmail,
            [event.target.name]: event.target.value
        })
    }
 const navigate = useNavigate();
    async function handleSubmit(event) {
        event.preventDefault();
      
        try {
          const url = "http://localhost:5000/portapi/v1/settings/changemail";
          const token = Cookies.get('token')
          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', // Set for JSON data
              'Authorization':`Bearer ${token}`
            },
            body: JSON.stringify(settingEmail) // Convert data to JSON string
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
      
    console.log(settingEmail)
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                    <TextField
                        label="Previous Email"
                        placeholder="Enter your recovery pin"
                        multiline
                        name='Email'
                        type='email'
                        minlength='4'
                        maxlength="4"
                        onChange={handleChange}
                        value={settingEmail.recovery}
                    />
                    <TextField
                        label="Email"
                        placeholder="Enter your new Email"
                        multiline
                        type='email'
                        name='NewEmail'
                        onChange={handleChange}
                        value={settingEmail.email}
                    />
                    <Button variant='contained' color="success" type="submit">Submit</Button>
                </Stack>
            </form>
        </>
    )
}