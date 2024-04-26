import React, {useState} from "react";
import TextField  from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Alert, Snackbar } from "@mui/material";
import Cookies from 'js-cookie'
import axios from 'axios'

export default function SettingUser(){
    const [openAlert, setOpenAlert] = useState(false); // State for managing Alert visibility
    const [alertSeverity, setAlertSeverity] = useState(""); // State for Alert severity
  
    const handleAlertClose = () => {
      setOpenAlert(false);
    };

    const [settingUser,setUser] = React.useState({
        email:"",
        user:""
    })
    function handleChange(event){
        setUser({
            ...settingUser,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const token = Cookies.get('token')
          const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          };
          const response = await axios.post("http://localhost:5000/portapi/v1/settings/changeUserName", settingUser, {withCredentials: true, headers: headers});

          console.log("email update successful:", response.data);
          setOpenAlert(true);
          setAlertSeverity("success"); // Set success severity

        } catch (error) {
          console.error("login failed:", error);
          setOpenAlert(true);
          setAlertSeverity("error"); // Set error severity
        }
      };

    console.log(settingUser)
    return(
        <>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                    <TextField
                    label="Recovery Pin"
                    placeholder="Enter your recovery pin"
                    multiline
                    name='email'
                    type='email'
                    onChange={handleChange}
                    value={settingUser.recovery}
                    />
                    <TextField
                    label="new username"
                    placeholder="Enter your new User Name"
                    multiline
                    type='text'
                    name='user'
                    onChange={handleChange}
                    value={settingUser.user}
                    />
                    <Button variant='contained' color="success" type="submit">Submit</Button>
                        </Stack>
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
            </form>               
        </>
    )
}